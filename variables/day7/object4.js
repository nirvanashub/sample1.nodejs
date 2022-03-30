//object inside object
const person = {
name : 'pooja',
tech : 'java',
laptop : {
    cpu : '13',
    ram : '6',
    brand : 'asus',
}
}
console.log(person);
console.log(person.name);
console.log(person.laptop);
console.log(person.laptop.brand);
console.log(person.laptop.brand.length);