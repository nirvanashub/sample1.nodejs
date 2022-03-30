class Person { 
constructor(name) {
this.name = name;

}

greet() {
return(`Hello ${this.name}`);
}
}

class Student extends Person {
}

const student1 = new Student('Jack');
student1.greet();
console.log(student1);
console.log(student1.greet());

