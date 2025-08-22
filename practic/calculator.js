let num1 = Number(prompt("Enter the first number:"));
let op = prompt("Enter an operator (+, -, *, /):");
let num2 = Number(prompt("Enter the second number:"));

switch (op) {
  case '+':
    alert(num1 + num2);
    break;
  case '-':
    alert(num1 - num2);
    break;
  case '*':
    alert(num1 * num2);
    break;
  case '/':
    if (num2 !== 0) {
      alert(num1 / num2);
    }
    else {
      alert('Error: Division by zero');
    }
    break;
  default:
    alert('Error: Unknown operator');
    break;
}
