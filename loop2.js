let num = 727000;
let reverse = 0
let lastdigit
let count = 0
while (num > 0) {
    lastdigit = Math.floor(num % 10)
    num = Math.floor(num / 10)
    count++
    if (lastdigit != 0) {
        reverse = lastdigit + (reverse * 10)
    }

}
console.log(count)

num = reverse
reverse = 0
while (num > 0) {
    lastdigit = Math.floor(num % 10)
    num = Math.floor(num / 10)
    reverse = lastdigit + (reverse * 10)
}
console.log(reverse)
if (count == 3) {
    console.log(reverse + "h");
}
else if (count == 4 || count==5 ||count == 6) {
    console.log(reverse + "K");
}
else if (count == 7 || count == 10) {
    console.log(reverse + "M");
}
else {
    console.log(reverse + "B");
}