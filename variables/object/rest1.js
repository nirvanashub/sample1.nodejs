const funcone = (...args) => {
   // return args.sort((a,b) => b-a)[0];
    return args.sort((a,b) => a-b)[0];
}
console.log(funcone(10,20,30,40,50,60));