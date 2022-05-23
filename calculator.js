const buttonNumber = document.getElementsByName('data-number');
const buttonOperation = document.getElementsByName('data-operation');
//devolver indice 0
const buttonEqual = document.getElementsByName('data-equal')[0];
const buttonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');

var currentOperation = '';
var prevOperation = '';
var operation = undefined;

buttonNumber.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText);
    })
});

buttonOperation.forEach(function(button){
    button.addEventListener('click', function(){
       selectOperation(button.innerText);
       // alert(button.innerText);
    })
});


    buttonEqual.addEventListener('click', function(){
        calcular();
        updateDisplay();
});

buttonDelete.addEventListener('click', function(){
    clear();
    updateDisplay();
});

//Metodo de calcular

function calcular(){
    var calcularNumero;
    const previous = parseFloat(prevOperation);
    const actual = parseFloat(currentOperation); 
    if (isNaN(previous) || isNaN(actual)) return;

    switch(operation){

        case '+':
            calcularNumero = previous + actual;
            break;
        
        case '-':
            calcularNumero = previous - actual;
            break;

        case 'x':
            calcularNumero = previous * actual;
            break;

        case '/':
            calcularNumero = previous / actual;
            break;

        default:
            return;
    }

    currentOperation = calcularNumero;

    operation = undefined;

    prevOperation = '';
}


//MEtodo agregar numero

function addNumber(num){
    //sumar valor del string anterior con el nuevo string
    currentOperation = currentOperation.toString() + num.toString();
    //concatenacion de los numeros
    updateDisplay();
}


function selectOperation(op){
    // Si la operacion actual es igual a nada no hacer nada
    if(currentOperation === '') return;
    
    if(prevOperation !==''){
        calcular()
    }
    operation = op.toString();
    prevOperation = currentOperation;
    currentOperation = '';
}

//Metodo para limpiar la pantalla

function clear(){
    currentOperation = '';
    prevOperation = '';
    operation = undefined;
}

function updateDisplay(){
    result.value = currentOperation;
};

//llamar al metodo clear cada vez que actualizo
clear();