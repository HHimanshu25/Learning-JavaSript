// async function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },5000);
//     });
// };
// async function main() {
    
//     console.log('loding module');
//     console.log('do something else');
//     console.log('load data');
//     let data = await getdata();
//     console.log(data);
//     console.log('procees');
//     console.log('task 2')
// }
// main()

// data.then((v)=>{
//     console.log(data);
//     console.log('procees');
//     console.log('task 2')

// })

async function getdata() {
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3000)
    })
}
async function main() {

    
    console.log('loding');
    console.log('do something');
    let data = await getdata()
    // data.then((v)=>{
    // })
    console.log(data)
    console.log('success');
}
main()
