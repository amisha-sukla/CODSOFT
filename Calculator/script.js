let resultField = document.getElementById('result');


function appendNumber(number) {
  resultField.value += number;
}


function appendOperator(operator) {
  resultField.value += ' ' + operator + ' ';
}


function clearResult() {
  resultField.value = '';
}


function backspace() {
  resultField.value = resultField.value.slice(0, -1);
}


function appendDecimal() {
  
  if (!resultField.value.includes('.')) {
    resultField.value += '.';
  }
}


function calculate() {
  try {
    let result = eval(resultField.value.replace('x', '*').replace('/', '/'));
    resultField.value = result;
  } catch (error) {
    resultField.value = 'Error';
  }
}


document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;
    
    
    if (value === 'C') {
      clearResult();
    }
    
   
    else if (value === '←') {
      backspace();
    }
    
    
    else if (value === '=') {
      calculate();
    }
    
   
    else if (value === '.') {
      appendDecimal();
    }
    
   
    else if (['+', '-', 'x', '/', '%'].includes(value)) {
      appendOperator(value);
    }
    
    
    else {
      appendNumber(value);
    }
  });
});







