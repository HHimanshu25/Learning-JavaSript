let promise = new Promise((resolve, reject) => {
   let rand = Math.random();
   if (rand < 0.5) {
       resolve('Success! Random number:');
    } else {
         reject('Failure! Random number:');
    }
});
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});
// console.log('hello');
// console.log(promise);
// console.log('hello 3');
