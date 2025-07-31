function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultDisplay = document.getElementById('result');
  
    if (isNaN(num1) || isNaN(num2)) {
      resultDisplay.textContent = 'Result: Please enter valid numbers.';
      return;
    }
  
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid operation';
    }
  
    resultDisplay.textContent = 'Result: ' + result;
  }

  function clearCalc() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
  }