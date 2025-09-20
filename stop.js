// Stopwatch countdown refactored
let secInput = document.querySelector('.sec');
let minInput = document.querySelector('.min');
let hourInput = document.querySelector('.hour');

function pad(val) {
    return String(val).padStart(2, '0');
}
let interval

      document.querySelector('.start').addEventListener('click',()=>{
    
    let second = Number(secInput.value);
    let minute = Number(minInput ? minInput.value || minInput.innerHTML : 0);
    let hour = Number(hourInput ? hourInput.value || hourInput.innerHTML : 0);
    interval = setInterval(() => {
        if (second > 0) {
            second--;
        } else if (minute > 0) {
            minute--;
            second = 59;
        } else if (hour > 0) {
            hour--;
            minute = 59;
            second = 59;
        } else {
            clearInterval(interval);
        }
        if (secInput) secInput.value = pad(second);
        if (minInput) minInput.value = pad(minute);
        if (hourInput) hourInput.value = pad(hour);  
    }, 1000);


})
document.querySelector('.start').addEventListener('dblclick',()=>{
    clearInterval(interval)
})
function checkLimit(input) {
    let val = Number(input.value);
    if (input.classList.contains('hour')) {
        if (val > 24) {
            input.value = 24;
        } else if (val < 0) {
            input.value = 0;
        }
    } else {
        if (val > 59) {
            input.value = 59;
        } else if (val < 0) {
            input.value = 0;
        }
    }

}



// To start the countdown, call startCountdown()()