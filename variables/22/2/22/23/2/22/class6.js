class Person{
name = 'piyush';
city = 'pushkar';
age = 20;
getaddress(){
return `${this.name} my age is ${20} from ${this.city}`;
}
}
const Personone = new Person();
const Persontwo = new Person();
console.log(Personone);
console.log(Persontwo);
Persontwo.age = 23;
console.log(Persontwo);