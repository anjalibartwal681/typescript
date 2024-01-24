let x: unknown = '5';

console.log(x as number+5)
console.log(x as number*5);


let num: any = 42;
let str: string = num as string; // Type assertion using 'as' syntax
console.log(typeof num); // Outputs: "string"



// let num: any = 42;
// let str: string = num as string; // Type assertion using 'as' syntax

// console.log(str + "2"); // Outputs: "422" (string concatenation)

//isssue
let num: any = 42;
let str: string = String(num) // Type assertion using 'as' syntax
console.log(str+4); // Outputs: "string" " 42"   give it proper 

let num: any = 42;
let str: string = num as string; // Type assertion using 'as' syntax

console.log(str + 2); 
