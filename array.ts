//array syntax

const names: string[] = [];

names.push("Dylan"); // no error

names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

console.log(names);

-----------------------------------------------------------------------------------------------------------------------------------------
  Typed Arrays
A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array:

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);
-----------------------------------------------------------------------------------------------------------------------------
  

const car: {type:string; model:string;year:number} = {
 type:"toyotta",
 model:"corolla",
 year:2016,
};
console.log(car)
