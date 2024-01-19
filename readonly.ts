
In TypeScript, the readonly modifier can be applied to various contexts, not just arrays.
  The readonly modifier is used to indicate that a property or variable should not be modified once it's been assigned a value.
  Here are some contexts where you can use readonly:

const names: readonly string[] = ["Dylan"];

names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// try removing the readonly modifier and see if it works?
console.log(names);
-------------------------------------------------------------------------readonly -----------------------------------------------------------------------------------------
let readOnlyTuple:  [number, string] = [1, "two"];
// let a:[string, number]= []
 let b: number = readOnlyTuple.push(1,"abc")
console.log(b)
console.log(readOnlyTuple)



// let readOnlyTuple: readonly [number, string] = [1, "two"];
// let a: [string, number] = ["initial", 42];

// let b: number = a.push("abc", 1);

// console.log(b); // Output: 4 (length of the modified array 'a')
// console.log(a); // Output: ["initial", 42, "abc", 1]
// console.log(readOnlyTuple); // Output: [1, "two"]
------------------------------------------------------------------------------
  interface MyObject {
    readonly prop1: number;
    prop2: string;
}

let myObject: MyObject = { prop1: 42, prop2: "Hello" };

console.log(myObject)

 myObject.prop1: 45

console.log(myObject)

