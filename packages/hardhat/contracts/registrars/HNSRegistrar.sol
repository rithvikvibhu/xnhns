pragma solidity ^0.7.0;

import "../../interfaces/IENS.sol";
import "../../interfaces/IXNHNSOracle.sol";
import "../../interfaces/IPanvalaMember.sol";
import "../Root.sol";

/**
 * @dev An ENS registrar that allows the owner of a HNS TLD to claim the
 *      corresponding TLD in ENS.
 */
contract HNSRegistrar {

    ENS public ens;
    // IPanvalaMember public hnsFund;

    // oracle that requests and stores tld verification data
    IXNHNSOracle public xnhnsOracle;
    // namespace that this contract lives in
    // formal registry of namespaces tbd in a HIP
    string public xnhnsNS;
    // add versioning var too?
    uint256 public constant snitchDeposit = 0.1 ether;
    uint256 public constant minTLDDeposit = 0.1 ether;

    // total tld + snitch deposits in contract
    uint256 public totalDeposits;
    // namehash -> tld deposit

    bytes4 constant private INTERFACE_META_ID = bytes4(keccak256("supportsInterface(bytes4)"));
    bytes4 constant private XNHNS_CLAIM_ID = bytes4(
      keccak256("register(string)") ^
      keccak256("unregister(string)") ^
      keccak256("snitchOn(string)") ^
      keccak256("namespace()") ^
      keccak256("oracle()")
    );

    struct Snitch {
      address addr;
      uint256 blockStart;
    }
    
    event NewOracle(address oracle);
    event TLDRegistered(bytes32 indexed node, address indexed owner);
    event SnitchedOn(bytes32 indexed node, address indexed owner, address indexed snitch);
    event SnitchesGotStitches(bytes32 indexed node, address indexed owner, address indexed snitch);

    mapping(bytes32 => Snitch) snitches; // namehash -> snitcher
    mapping(bytes32 => uint256) public tldDeposits;

    constructor(ENS _ens, string memory _namespace, IXNHNSOracle _oracle) {
        ens = _ens;
        xnhnsNS = _namespace;
        xnhnsOracle = _oracle;
        emit NewOracle(address(_oracle));
    }

    /**
     * @dev This contract's owner-only functions can be invoked by the owner of the ENS root.
     */
    modifier onlyOwner {
      require(msg.sender == _getRoot().owner());
      _;
    }

    modifier whileOracleAllowed {
      require(
        IXNHNSOracle(xnhnsOracle).getCallerPermission(address(this)),
        'Registrar disabled'
      );
      _;
    }

    function verify(string calldata tld) public payable returns (bytes32 requestId) {
      require(msg.value >= minTLDDeposit, 'Insufficient tld deposit');
      tldDeposits[_getNamehash(tld)] = msg.value;
      totalDeposits += msg.value;
      return xnhnsOracle.updateTLD(tld);
    }

    /**
     * @dev Claims a name by proving ownership of its HNS equivalent.
     * Chainlink node verifies that NS record is pointed to namespace of this contract (Ethereum)
     * and pulls TXT record with address to give ownership to.
     * @param node The HNS domain to claim
     */
    function register(bytes32 node) public returns (uint id) {
      address tldOwner = IXNHNSOracle(xnhnsOracle).getTLDOwner(node);
      require(tldOwner != address(0), 'TLD is invalid on this namespace');
      require(tldOwner == msg.sender, 'Only TLD owner can register');
      // theoretically tld can be verified by another contract and we dont take a deposit
       _getRoot().register(uint(node), msg.sender);
      emit TLDRegistered(node, msg.sender);
      return uint(node);
    }


    /** @dev Allows anyone to prove that TLD is not set anymore and revoke teir ENS name
     * @param tld - human readable string 
    */
    function snitchOn(string memory tld) public payable returns (bytes32 requestId) {
      require(msg.value >= snitchDeposit, 'Insufficient snitch deposit');
      bytes32 node  = _getNamehash(tld);
      require(tldDeposits[node] >= minTLDDeposit, 'TLD not registered');
      (address addr,) = _getSnitch(node);
      require(addr == address(0), 'TLD already snitched on');
      snitches[node] = Snitch({
        addr: msg.sender,
        blockStart: block.timestamp
      });
      totalDeposits += snitchDeposit;
      return IXNHNSOracle(xnhnsOracle).updateTLD(tld);
    }

    function claimSnitchReward(bytes32 node) public returns (bool) {
      (address addr, uint256 blockStart) = _getSnitch(node);
      // prevent snitch front running oracle response
      require(block.timestamp > blockStart + 2 hours, 'Cannot snitch yet');
      delete snitches[node];

      if(IXNHNSOracle(xnhnsOracle).getTLDOwner(node) == address(0)) {
        // snitch successful
        uint256 tldDeposit = _unregister(node);
        payable(addr).transfer(snitchDeposit + (tldDeposit / 2));
        totalDeposits -= (snitchDeposit + tldDeposit);
        emit SnitchedOn(node, _getRoot().ownerOf(uint(node)), addr);
        return true;
      } else {
        // snitch failed
        // move snitch deposit to smart contract's fees
        totalDeposits -= snitchDeposit;
        emit SnitchesGotStitches(node, _getRoot().ownerOf(uint(node)), addr);
        return false;
      }
    }

    function unregister(bytes32 node) public payable {
      uint id = uint(node);
      address owner = _getRoot().ownerOf(id);
      require(msg.sender == owner, 'Only TLD owner can unregister');

      uint256 deposit = _unregister(node);
      payable(owner).transfer(deposit);
    }

    function _unregister(bytes32 node) internal returns (uint256 deposit) {
      _getRoot().unregister(uint(node));
      deposit = tldDeposits[node];
      totalDeposits -= deposit;
      tldDeposits[node] = 0;
      return deposit;
    }

    function setOracle(IXNHNSOracle _oracle) public onlyOwner returns (bool) {
      xnhnsOracle = _oracle;
      emit NewOracle(address(xnhnsOracle));
      return true;
    }

    /**
     * @dev donate fees collected by registrar to HNS Fund via Panvala League
    */
    function donateProfits() public returns(uint) {
      uint feesCollected = address(this).balance - totalDeposits;
      // hnsFund.regenerate.value(feesCollected)(feesCollected);
      return feesCollected;
    }

    function oracle() public view returns (IXNHNSOracle) {
      return xnhnsOracle;
    }
    
    function namespace() public view returns (string memory) {
      return xnhnsNS;
    }

    function _getNamehash(string memory tld) public pure returns (bytes32) {
      return keccak256(abi.encodePacked(bytes32(0), tld));
    }

    function _getRoot() internal view returns (Root) {
      return Root(ens.owner(bytes32(0)));
    }

    function _getSnitch(bytes32 node) public view returns (address, uint256) {
      Snitch memory _snitch = snitches[node];
      return (_snitch.addr, _snitch.blockStart);
    }


    function supportsInterface(bytes4 interfaceID) public pure returns (bool) {
        return interfaceID == INTERFACE_META_ID ||
               interfaceID == XNHNS_CLAIM_ID;
    }
}
