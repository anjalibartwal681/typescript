class Person {
    private name: string;
    age:number;

  constructor(name: string) {
        this.name = name;
        console.log(name)
    }

    public getName(): string {
        return this.name;
    }
}

class Person1 extends Person {
    // You can add additional properties or methods for Person1 if needed

    // constructor() {
    //     // Call the constructor of the base class using super()
    //     super("DefaultName");
    // }
    
    
    display(){
       return this.age=20;
      // console.log(this.age)///
    
    }
}

// const person = new Person("Jane");
// console.log(person);// Accessing the private property using the public method

const person1 = new Person1("abb");

 console.log(person1.display());
// console.log(person1.getName()); // Inherited method from the base class
