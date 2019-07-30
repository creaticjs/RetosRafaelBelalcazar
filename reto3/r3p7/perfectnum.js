function numPerfects() {
    number = document.getElementById('number').value
    document.getElementById('result').innerHTML=''
    counterPerfects = 1
    var x = 2 
    result=''

    while (counterPerfects <= number) {        
        if (esPrimo(x)) {
            perfect = 2 ** (x - 1) * (2 ** x - 1) //Por ecuación de Euclides
            console.log(perfect)
            result += '<p>'+ perfect+'</p>'
            console.log(result)
            counterPerfects++
        }
        // document.getElementById('result').value=result
        document.getElementById('result').innerHTML=result
        x++
    }
}

function esPrimo(num) {
    let counter = 0
    for (i = num; i > 0; i--) {
        if (num % i == 0) counter++
    }
    if (counter > 2) {
        return false
    }
    else return true
}