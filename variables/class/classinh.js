class Father{
constructor(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}
getAddress() {
return `${this.name} is from city ${this.city}`;

}
}
class Son extends Father{
constructor(name, age, city){
super(name, age, city);
}
getFatheradd() {
return `${this.name} is from city ${this.city}`;
}
}
const childone = new Son('ashley', 33, 'usa');
console.log(childone.getFatheradd());
