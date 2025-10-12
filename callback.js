let prom1 = new Promise((resolve,reject) => {
    let ran = Math.random();
    if(ran<0.5){
     reject('your program did not support this ')   
    }
    else{
        
        setTimeout(() => {
            console.log('yes i am done');
            resolve('himanshu now you learn this')
        }, 1000);
    }
})
prom1.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err)
})
