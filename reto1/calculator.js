var result = ''
var operacion = ''
var num1
var num2

function getParameter(number) {
    var aux = document.getElementById('result').value
    if (aux != 0) {
        result = aux.concat(number);
    }
    else if (aux == 0) {
        result = number
    }
    document.getElementById('result').value = result
}

function operation(ope) {
    num1 = parseFloat(document.getElementById('result').value)
    document.getElementById('result').value = ''
    operacion = ope
}

function equals() {
    num2 = parseFloat(document.getElementById('result').value)
    switch (operacion) {
        case 'sum':
            document.getElementById('result').value = num1 + num2
            break
        case 'dif':
            document.getElementById('result').value = num1 - num2
            break
        case 'mul':
            document.getElementById('result').value = num1 * num2
            break
        case 'div':
            isAllowedDiv()
            break
    }
}

function isAllowedDiv() {
    num2 != 0 ? document.getElementById('result').value =(num1 / num2) : document.getElementById('result').value = 'No permitido'
}

clearAll = () => document.getElementById('result').value = ''

clearOne = () =>{
    num = document.getElementById('result').value
    document.getElementById('result').value = num.slice(0,num.length-1)    
}