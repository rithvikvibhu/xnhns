// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Domain extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Domain entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Domain entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Domain", id.toString(), this);
  }

  static load(id: string): Domain | null {
    return store.get("Domain", id) as Domain | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get labelName(): string | null {
    let value = this.get("labelName");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set labelName(value: string | null) {
    if (value === null) {
      this.unset("labelName");
    } else {
      this.set("labelName", Value.fromString(value as string));
    }
  }

  get labelhash(): Bytes | null {
    let value = this.get("labelhash");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set labelhash(value: Bytes | null) {
    if (value === null) {
      this.unset("labelhash");
    } else {
      this.set("labelhash", Value.fromBytes(value as Bytes));
    }
  }

  get parent(): string | null {
    let value = this.get("parent");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set parent(value: string | null) {
    if (value === null) {
      this.unset("parent");
    } else {
      this.set("parent", Value.fromString(value as string));
    }
  }

  get subdomains(): Array<string> {
    let value = this.get("subdomains");
    return value.toStringArray();
  }

  set subdomains(value: Array<string>) {
    this.set("subdomains", Value.fromStringArray(value));
  }

  get resolvedAddress(): string | null {
    let value = this.get("resolvedAddress");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set resolvedAddress(value: string | null) {
    if (value === null) {
      this.unset("resolvedAddress");
    } else {
      this.set("resolvedAddress", Value.fromString(value as string));
    }
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get deposit(): string {
    let value = this.get("deposit");
    return value.toString();
  }

  set deposit(value: string) {
    this.set("deposit", Value.fromString(value));
  }

  get resolver(): string | null {
    let value = this.get("resolver");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set resolver(value: string | null) {
    if (value === null) {
      this.unset("resolver");
    } else {
      this.set("resolver", Value.fromString(value as string));
    }
  }

  get ttl(): BigInt | null {
    let value = this.get("ttl");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set ttl(value: BigInt | null) {
    if (value === null) {
      this.unset("ttl");
    } else {
      this.set("ttl", Value.fromBigInt(value as BigInt));
    }
  }

  get registrar(): Bytes | null {
    let value = this.get("registrar");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set registrar(value: Bytes | null) {
    if (value === null) {
      this.unset("registrar");
    } else {
      this.set("registrar", Value.fromBytes(value as Bytes));
    }
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domains(): Array<string> {
    let value = this.get("domains");
    return value.toStringArray();
  }

  set domains(value: Array<string>) {
    this.set("domains", Value.fromStringArray(value));
  }
}

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit", id.toString(), this);
  }

  static load(id: string): Deposit | null {
    return store.get("Deposit", id) as Deposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get transactionID(): Bytes {
    let value = this.get("transactionID");
    return value.toBytes();
  }

  set transactionID(value: Bytes) {
    this.set("transactionID", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get epochStart(): BigInt | null {
    let value = this.get("epochStart");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set epochStart(value: BigInt | null) {
    if (value === null) {
      this.unset("epochStart");
    } else {
      this.set("epochStart", Value.fromBigInt(value as BigInt));
    }
  }

  get epochLength(): BigInt | null {
    let value = this.get("epochLength");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set epochLength(value: BigInt | null) {
    if (value === null) {
      this.unset("epochLength");
    } else {
      this.set("epochLength", Value.fromBigInt(value as BigInt));
    }
  }
}

export class OracleUpdateReceived extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save OracleUpdateReceived entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OracleUpdateReceived entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OracleUpdateReceived", id.toString(), this);
  }

  static load(id: string): OracleUpdateReceived | null {
    return store.get("OracleUpdateReceived", id) as OracleUpdateReceived | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get transactionID(): Bytes {
    let value = this.get("transactionID");
    return value.toBytes();
  }

  set transactionID(value: Bytes) {
    this.set("transactionID", Value.fromBytes(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfer", id.toString(), this);
  }

  static load(id: string): Transfer | null {
    return store.get("Transfer", id) as Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get transactionID(): Bytes {
    let value = this.get("transactionID");
    return value.toBytes();
  }

  set transactionID(value: Bytes) {
    this.set("transactionID", Value.fromBytes(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class NewOwner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NewOwner entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NewOwner entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NewOwner", id.toString(), this);
  }

  static load(id: string): NewOwner | null {
    return store.get("NewOwner", id) as NewOwner | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get parentDomain(): string {
    let value = this.get("parentDomain");
    return value.toString();
  }

  set parentDomain(value: string) {
    this.set("parentDomain", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get transactionID(): Bytes {
    let value = this.get("transactionID");
    return value.toBytes();
  }

  set transactionID(value: Bytes) {
    this.set("transactionID", Value.fromBytes(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class MigrationRequested extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MigrationRequested entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MigrationRequested entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MigrationRequested", id.toString(), this);
  }

  static load(id: string): MigrationRequested | null {
    return store.get("MigrationRequested", id) as MigrationRequested | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get transactionID(): Bytes {
    let value = this.get("transactionID");
    return value.toBytes();
  }

  set transactionID(value: Bytes) {
    this.set("transactionID", Value.fromBytes(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get registrar(): Bytes {
    let value = this.get("registrar");
    return value.toBytes();
  }

  set registrar(value: Bytes) {
    this.set("registrar", Value.fromBytes(value));
  }
}

export class NewResolver extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NewResolver entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NewResolver entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NewResolver", id.toString(), this);
  }

  static load(id: string): NewResolver | null {
    return store.get("NewResolver", id) as NewResolver | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get transactionID(): Bytes {
    let value = this.get("transactionID");
    return value.toBytes();
  }

  set transactionID(value: Bytes) {
    this.set("transactionID", Value.fromBytes(value));
  }

  get resolver(): string {
    let value = this.get("resolver");
    return value.toString();
  }

  set resolver(value: string) {
    this.set("resolver", Value.fromString(value));
  }
}

export class NewTTL extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NewTTL entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NewTTL entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NewTTL", id.toString(), this);
  }

  static load(id: string): NewTTL | null {
    return store.get("NewTTL", id) as NewTTL | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get transactionID(): Bytes {
    let value = this.get("transactionID");
    return value.toBytes();
  }

  set transactionID(value: Bytes) {
    this.set("transactionID", Value.fromBytes(value));
  }

  get ttl(): BigInt {
    let value = this.get("ttl");
    return value.toBigInt();
  }

  set ttl(value: BigInt) {
    this.set("ttl", Value.fromBigInt(value));
  }
}

export class SnitchedOn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SnitchedOn entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SnitchedOn entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SnitchedOn", id.toString(), this);
  }

  static load(id: string): SnitchedOn | null {
    return store.get("SnitchedOn", id) as SnitchedOn | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get transactionID(): Bytes {
    let value = this.get("transactionID");
    return value.toBytes();
  }

  set transactionID(value: Bytes) {
    this.set("transactionID", Value.fromBytes(value));
  }

  get snitch(): string {
    let value = this.get("snitch");
    return value.toString();
  }

  set snitch(value: string) {
    this.set("snitch", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get snitchReward(): BigInt {
    let value = this.get("snitchReward");
    return value.toBigInt();
  }

  set snitchReward(value: BigInt) {
    this.set("snitchReward", Value.fromBigInt(value));
  }
}

export class SnitchesGotStitches extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SnitchesGotStitches entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SnitchesGotStitches entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SnitchesGotStitches", id.toString(), this);
  }

  static load(id: string): SnitchesGotStitches | null {
    return store.get("SnitchesGotStitches", id) as SnitchesGotStitches | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string {
    let value = this.get("domain");
    return value.toString();
  }

  set domain(value: string) {
    this.set("domain", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get transactionID(): Bytes {
    let value = this.get("transactionID");
    return value.toBytes();
  }

  set transactionID(value: Bytes) {
    this.set("transactionID", Value.fromBytes(value));
  }

  get snitch(): string {
    let value = this.get("snitch");
    return value.toString();
  }

  set snitch(value: string) {
    this.set("snitch", Value.fromString(value));
  }

  get snitchPenalty(): BigInt {
    let value = this.get("snitchPenalty");
    return value.toBigInt();
  }

  set snitchPenalty(value: BigInt) {
    this.set("snitchPenalty", Value.fromBigInt(value));
  }
}

export class Resolver extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Resolver entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Resolver entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Resolver", id.toString(), this);
  }

  static load(id: string): Resolver | null {
    return store.get("Resolver", id) as Resolver | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get domain(): string | null {
    let value = this.get("domain");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set domain(value: string | null) {
    if (value === null) {
      this.unset("domain");
    } else {
      this.set("domain", Value.fromString(value as string));
    }
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get addr(): string | null {
    let value = this.get("addr");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set addr(value: string | null) {
    if (value === null) {
      this.unset("addr");
    } else {
      this.set("addr", Value.fromString(value as string));
    }
  }

  get contentHash(): Bytes | null {
    let value = this.get("contentHash");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set contentHash(value: Bytes | null) {
    if (value === null) {
      this.unset("contentHash");
    } else {
      this.set("contentHash", Value.fromBytes(value as Bytes));
    }
  }

  get texts(): Array<string> | null {
    let value = this.get("texts");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set texts(value: Array<string> | null) {
    if (value === null) {
      this.unset("texts");
    } else {
      this.set("texts", Value.fromStringArray(value as Array<string>));
    }
  }

  get coinTypes(): Array<i32> | null {
    let value = this.get("coinTypes");
    if (value === null) {
      return null;
    } else {
      return value.toI32Array();
    }
  }

  set coinTypes(value: Array<i32> | null) {
    if (value === null) {
      this.unset("coinTypes");
    } else {
      this.set("coinTypes", Value.fromI32Array(value as Array<i32>));
    }
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}
