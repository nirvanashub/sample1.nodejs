// don't use const if you want to concat
let arr1 = [12,22,2,12,25,22,];
let arr2 = [15,36,78,65,63];
arr1 = [...arr1, ...arr2];
console.log(arr1);

