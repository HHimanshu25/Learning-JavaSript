document.body.style.backgroundColor = "black"
document.body.style.color = "brown";

let button = document.querySelector(".btn");
button.addEventListener("click", function(){
    document.querySelector(".demo").innerHTML = "you clicked the button";
})