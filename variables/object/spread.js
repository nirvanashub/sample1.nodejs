// deep copy in obj using spread oprator(...)
const arr1 = [45,55,552,26,36];
let arr2 = [...arr1];
arr2.push(22);

console.log(arr1);
console.log(arr2);
arr2.pop(22);
console.log(arr1);
console.log(arr2);