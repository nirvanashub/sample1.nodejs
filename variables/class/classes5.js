//we use class to define templates
// defining class by es5 syntax
class Person {
 constructor (name, age, city){
this.name = name;
this.age = age;
this.city = city;
}
getaddress () {
return `${this.name} is from city ${this.city}`;
}
}
const personone = new Person('shubham', 26, 'ujjain');
const person2 = new Person('ravi', 27, 'ajmer');
console.log(personone);  
console.log(person2);
console.log(personone.getaddress());
console.log(person2.getaddress());

