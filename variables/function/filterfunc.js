const arr = [1, 5, 6, 8, 9, 7];

const result = arr.filter((num) => {
    return num < 9;
});
console.log(result);

// optimized code
const result2 = arr.filter(num => num > 5);
console.log(result2);

