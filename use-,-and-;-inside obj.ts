
In TypeScript, the use of semicolons (;) inside an object type annotation is optional, 
and you can also use commas (,). Both semicolons and commas are accepted as property separators within an object type definition.
The choice between them is largely a matter of personal or team preference.

  const name: { firstname: string; address: string; age: number } = {
  firstname: "anjali",
  address: "rishikesh",
  age: 1
};

const name: { firstname: string, address: string, age: number } = {
  firstname: "anjali",
  address: "rishikesh",
  age: 1
};
