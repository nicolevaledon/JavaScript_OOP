console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }
  removeHobby(remHobby) {
    this.hobbies = this.hobbies.filter((hobby) => hobby !== remHobby);
  }

  /*this.hobbies = this.hobbies.filter((element)=> {
    return (element != hobby);
  });
*/
  greeting() {
    console.log("Hello fellow person!");
  }
}

// Exercise 3 Section

const testPerson = new Person("Nicole", 0, "Puerto Rico", [
  "sewing",
  "thrifting",
]);

console.log(testPerson);

testPerson.addHobby("photography");
console.log(testPerson);

testPerson.removeHobby("sewing");
console.log(testPerson);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting() {
    console.log("Hola!!");
  }
}

// Exercise 3 Section

const coder = new Coder("Buttercup", 3, "Townsville", [
  "Saving the World",
  "fighting",
  "snuggles",
]);
console.log(coder);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(a, b) {
    this.result = a + b;
    return this.result;
  }
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }
  divide(a, b) {
    this.result = a / b;
    return this.result;
  }
  displayResult(a, b) {
    console.log(this.result);
  }
}

const calc = new Calculator();
calc.add(2, 3);
calc.displayResult();
calc.subtract(5, 3);
calc.displayResult();
calc.multiply(1, 3);
calc.displayResult();
calc.divide(9, 6);
calc.displayResult();
