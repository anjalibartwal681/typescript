
an interface in TypeScript provides a type definition that can be used to describe the shape or structure of an object

interface Person {
    name: string;
    age: number;
}

let user: Person = {
    name: "Alice",
    age: 30
};

console.log(user.name)
