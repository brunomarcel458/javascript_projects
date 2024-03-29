//Get values that will keep always working:
//Numbers that will be clicked, Operators that will be clicked, Numbers that will be showed and results

var numbersClicked = document.querySelector('.numbers-click');
var operatorClicked = document.querySelector('.operators-click');
var firstNumberShow = document.querySelector('.first-number');
var operatorShow = document.querySelector('.current-operator');
var lastNumberShow = document.querySelector('.last-number');
var clickResult = document.querySelector('#btn-result');
var resultValue = document.querySelector('.result-value');

//function to get click number events
var firstNumber = "";
var operator = "";
var lastNumber = "";

function addNumberClick() {
    numbersClicked.addEventListener('click', (e)=>{
        if(operator == "") {
            firstNumber = firstNumber + e.target.textContent;
            firstNumberShow.textContent = firstNumber;
            // console.log(e.target.textContent);
        } else {
            lastNumber = lastNumber + e.target.textContent;
            lastNumberShow.textContent = lastNumber;
        }
    })
}

//function to get click operator events
function addOperatorClick() {
    operatorClicked.addEventListener('click', (op)=>{
        if(firstNumber !== ""){
            operatorShow.textContent = op.target.textContent;
            operator = operatorShow;
            if(lastNumber !== ""){
              calculateResult();
              alert('chegou')
            }
        }
    })
}

// functiion to calculate result based on current numbers and operator clicked
function calculateResult() {
    var result = 0;
    var num1 = parseFloat(firstNumber);
    var num2 = parseFloat(lastNumber);

    switch (operatorShow) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }

    // Exibir o resultado na página
    resultValue.textContent = result;

    // Limpar as variáveis para a próxima operação
    firstNumber = result.toString();
    secondNumber = "";
    firstNumberShow.textContent = firstNumber;
    lastNumberShow.textContent = "";
    operatorShow.textContent = "";
  }

  calculateResult();
  // Adicionar eventos de clique aos botões de números e operadores
  addNumberClick();
  addOperatorClick();