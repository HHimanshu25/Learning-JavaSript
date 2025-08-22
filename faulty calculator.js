let random = Math.random();
alert(random)
let a = prompt("enter your first numebr")
let b = prompt("Enter you opration")
let c = prompt("Enter your second nmber")

let obj = {
    "+": "-",
    "-":"/",
    "*":"+",
    "/":"-"

}
if(random>0.1){
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    b =obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
