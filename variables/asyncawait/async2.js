<<<<<<< HEAD
const p = new Promise((res, rej) => {
    res(1);
  })
  
  async function asyncReturn() {
    return p;
  }
  
  function basicReturn() {
    return Promise.resolve(p);
  }
  
  console.log(p === basicReturn()); // true
=======
const p = new Promise((res, rej) => {
    res(1);
  })
  
  async function asyncReturn() {
    return p;
  }
  
  function basicReturn() {
    return Promise.resolve(p);
  }
  
  console.log(p === basicReturn()); // true
>>>>>>> a3339e7df4be0cb7ade162fd9eaa37cc9aaf406c
  console.log(p === asyncReturn()); // false