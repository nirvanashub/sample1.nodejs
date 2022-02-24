const evenodd = (num) => {
    if (num%5 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
const result = evenodd(254);
console.log(`given number is ${result}`);