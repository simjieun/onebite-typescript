/**
 * Unknown Type
 */
function unKnownType() {
  let a: unknown = 30;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;

  let unknownVar: unknown;
  let anyVar: any;
  let as: bigint = anyVar;

  //   let num: number = unknownVar;
}

/**
 * Never Type
 */
function neverType() {
  function infiniteLoop(): never {
    while (true) {}
  }

  let num: number = infiniteLoop();
  let str: string = infiniteLoop();
  let bool: boolean = infiniteLoop();

  //   let never1: never = 10;
  //   let never2: never = "hello";
  //   let never3: never = true;
}

/**
 * Void Type
 */
function voidType() {
  function voidFunc(): void {
    console.log("hello");
  }

  let voidVar: void = undefined;
}

/**
 * any Type
 */
function anyType() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  //   neverVar = anyVar;
}
