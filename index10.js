//Question10
// The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = this.age >= 16; // Added canDrive method
  }

// a) Create a new person
let person1 = new Person("Sean", 20);

// b) Create a second person
let person2 = new Person("Keith", 17);

// c) Print out the properties of each person object to the console
console.log(person1);
console.log(person2);

// d) Rewrite the constructor function as a class called PersonClass
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
      }
      canDrive() {  // d) Added canDrive method
          const canDriveStatement = this.age >= 16 ? 'can' : 'cannot';
          return `${this.name} is ${this.age} years old and ${canDriveStatement} drive.`;
        }
      }
//Create third person and print
 let person3 = new PersonClass("Shonna", 49);

 console.log(person3);
 console.log(person3.canDrive());