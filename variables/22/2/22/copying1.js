// shallow copy happens for object, pass by refrence
const arr1 = [45,55,552,26,36];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr2.pop(36);
console.log(arr1);
console.log(arr2);   
arr2.push(9);
console.log(arr1);
console.log(arr2);