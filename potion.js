// let div = document.createElement("div");
// div.innerHTML = " This is a box "
// div.setAttribute("class","box");
// div.querySelector('.box1').before(div);

 function newbox() {
    let div = document.createElement("div");
    div.innerHTML = "box"
    div.setAttribute("class", "box box1");
    document.querySelector(".con").append(div);    
}




