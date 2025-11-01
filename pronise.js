// // let p = new Promise((resolve, reject) => {
// //    let rand = Math.random();
// //    if (rand < 0.5) {
// //     console.log('Success! Random number')
// //        resolve(rand);
// //     } else {
// //          console.log('Failure! Random number:');
// //          reject(new Error('you are motherfucker'))
// //     }
// // });
// // p.then(alert)
// // p.catch(alert)
// // console.log('hello');
// // console.log(promise);
// // console.log('hello 3');


// let p1 = new Promise((resolve , reject)=>{
//       console.log('p1 exute succesfully');
//       resolve('p1')    
   
   
// })
// p1.then((value)=>{
// console.log(value);

// let p2 = new Promise((resolve)=>{
//    console.log('p2 exute successfullly');
//  resolve('2')
// })
// }).then((value)=>{
//    console.log(value);   
// })

let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
  console.log(html);
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;

