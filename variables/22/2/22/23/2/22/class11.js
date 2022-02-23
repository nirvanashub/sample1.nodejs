class phone {
name = 'apple';
price = 80000;
printname(){
return `${this.name} with ${this.price}`;
}
}
class touchPhone extends phone {
name = 'samsung';
price = 20000;
printname(){
return `${this.name} with ${this.price}`; 
}
}
const phone1 = new phone();
console.log(phone1);
console.log(phone1.printname());
