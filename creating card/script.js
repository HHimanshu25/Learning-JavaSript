

function image() {
    document.querySelector(".img").children[0].src = document.querySelector(".photo").value
    // 'post.avif'
}

function tagname() {
    document.querySelector(".name").innerHTML = document.querySelector(".tag").value
}
function chname() {
    document.querySelector(".channel-name").innerHTML = document.querySelector(".chna").value
}
function view() {
    // document.querySelector(".view").innerHTML = document.querySelector(".vie").value
    let num =  document.querySelector(".vie").value
    console.log(num)
let reverse=0
let lastdigit
let count = 0;
while(num>0){
    lastdigit = Math.floor(num%10)
    num = Math.floor(num/10)
    count++;
    if (lastdigit != 0) {
        reverse = lastdigit + (reverse*10)
    }
    
}

num = reverse
reverse =0
while(num>0){
    lastdigit = Math.floor(num%10)
    num = Math.floor(num/10)
reverse = lastdigit + (reverse*10)
}
console.log(reverse)

if (count == 3) {
   document.querySelector(".view").innerHTML = (reverse+"h");
}
else if (count >= 4 && count <= 6) {
   document.querySelector(".view").innerHTML =(reverse+"K");
}
else if (count >= 7 && count <= 10) {
   document.querySelector(".view").innerHTML = (reverse+"M");
}
else{
   document.querySelector(".view").innerHTML =(reverse+"B");
}
}
function time() {
    document.querySelector(".time").innerHTML = document.querySelector(".samy").value
}
function sub() {
    document.querySelector(".contain").classList.toggle("togg")
}
