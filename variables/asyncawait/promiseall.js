<<<<<<< HEAD
const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('first promise is resolved');
        resolve(10);
    })
}, 1000);

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('second promise is resolved');
        resolve(20);
    })
}, 2000);

const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('third promise is resolved');
        resolve(30);
    })
}, 3000);

promise.all([p1, p2, p3]).then((results) => {
    console.log(`Results: ${results}`);
}).catch((Error) => {
    console.log(`Error: ${error}`);
=======
const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('first promise is resolved');
        resolve(10);
    })
}, 1000);

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('second promise is resolved');
        resolve(20);
    })
}, 2000);

const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('third promise is resolved');
        resolve(30);
    })
}, 3000);

promise.all([p1, p2, p3]).then((results) => {
    console.log(`Results: ${results}`);
}).catch((Error) => {
    console.log(`Error: ${error}`);
>>>>>>> a3339e7df4be0cb7ade162fd9eaa37cc9aaf406c
});