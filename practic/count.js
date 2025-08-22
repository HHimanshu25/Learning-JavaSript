let j =0;
let fn;
let tt;

let num=1500;
while(num>0){
    num=Math.trunc(num/10);
    j++;
if(num!=0){  
    fn=num+10

}
}
if(j==3){
    console.log(fn+"hundred")
}
else if(j==4 || j==5){
    console.log(fn+"thousand")
}
else if(j==6 || j==7){
    console.log("lakh")
}
else{
    console.log("not in range")
}