class Person {
constructor(name) {
this.name = name;
}
greet() {
console.log(`Hello ${this.name}`);
}
}

const person1 = new Person('John');

console.log(person1.name); // John
console.log(person1.greet()); // Hello John