alert(tt())
function tt(){

    let rendom = Math.ceil(1 + Math.random() * 10);
    console.log(rendom);    
    let guess = prompt("Guess a number between 1 and 10");
    if(guess == rendom) {
        alert("good marks");  
    }
    else {
        alert("not matched , try again");
        tt();
    }
}