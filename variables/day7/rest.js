// rest operator is also denoted by ...
// it catches all the arguments as an array
const funcone = (...args) => {
    console.log(args);
    return 'pp';
} 
funcone(11,15,24,25,26);