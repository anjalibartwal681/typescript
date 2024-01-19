Type Assignment
When creating a variable, there are two main ways TypeScript assigns a type:

Explicit
Implicit
In both examples below firstName is of type string

 if a had define the types of variable it will be called as explicit 
// Explicitly declaring the type of the variable
let age: number = 25;

// Explicitly declaring the types of function parameters and return type
function add(x: number, y: number): number {
    return x + y;

}


-----------------------------------------------------------------------------------Implicit---------------------------------------------------------------------------------------

where i havn't  define the type  a type will depend on input data it will be called as  implicit
 When the type of a variable or expression is determined by the input data or is automatically inferred by the programming language, it is referred to as "implicit typing" or "type inference." 

// Implicit typing: TypeScript infers the type based on the assigned value
let x = 5; // TypeScript infers 'x' as type number
let message = "Hello, TypeScript!"; // TypeScript infers 'message' as type string

// Function with implicit typing
function add(a, b) {
    return a + b;
}

let result = add(3, 4); // TypeScript infers 'result' as type number


