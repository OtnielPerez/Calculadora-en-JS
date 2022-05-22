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
    clearInterval();
    updateDisplay();
});

//llamando a la funcion agregar numero

function addNumber(num){
    //sumar valor del string anterior con el nuevo string
    currentOperation = currentOperation.toString() + num.toString();
    //concatenacion de los numeros
    updateDisplay();
}

function updateDisplay(){
    result.value = currentOperation;
};