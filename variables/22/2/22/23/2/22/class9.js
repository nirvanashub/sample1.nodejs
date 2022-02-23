class Person { 
constructor(name, badge) {
this.name = name;
this.badge = badge;
}
greet() {
return(`Hello ${this.name} you are cricket team ${this.badge}`);
}
}
class Student extends Person {
constructor(name, badge) {
super(name, badge);
}
}
const student1 = new Student('Jack','captain');
student1.greet();
console.log(student1);
console.log(student1.greet());

