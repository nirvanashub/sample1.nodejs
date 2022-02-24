// deep copy happens, pass by value
const a = 88;
let b = a;
let c = b;
console.log(a);
console.log(b);
console.log(c);
b = 52;
console.log(a);
console.log(b);
console.log(c);
c = 23;
console.log(a);
console.log(b);
console.log(c);