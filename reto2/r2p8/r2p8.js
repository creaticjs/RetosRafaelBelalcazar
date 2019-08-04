textToNumber = () => {
    number = document.getElementById('number').value
    number.substr(-1) === '.' ? convertToDigits(number) : console.log('termina escribiendo un punto "."')
}

convertToDigits = (textNumber) => {
    let centenas = findCentenas(textNumber)? findCentenas(textNumber) : 0
    let decenas = findDecenas(textNumber)? findDecenas(textNumber) : 0
    let unidades = findUnidades(textNumber)? findUnidades(textNumber) : 0
    resul = unidades+decenas+centenas
    if(resul){
        document.getElementById('result').innerHTML = resul
    }else document.getElementById('result').innerHTML = 'Tal vez escribiste mal el número'
}

findCentenas = (textNumber) =>{ 
    if(textNumber.includes('dosciento')) return 200
    else if(textNumber.includes('trescientos')) return 300
    else if(textNumber.includes('cuatrocientos')) return 400
    else if(textNumber.includes('quinientos')) return 500
    else if(textNumber.includes('seicientos')) return 600
    else if(textNumber.includes('setecientos')) return 700
    else if(textNumber.includes('ochocientos')) return 800
    else if(textNumber.includes('novecientos')) return 900
    else if(textNumber.includes('cien')) return 100 //El 100 se debe colocar de ultimo, por que si se coloca al inicio siempre sera cierta
}

findDecenas = textNumber => {
    if (textNumber.includes('noventa')) return 90
    else if (textNumber.includes('ochenta')) return 80
    else if (textNumber.includes('setenta')) return 70
    else if (textNumber.includes('sesenta')) return 60
    else if (textNumber.includes('cincuenta')) return 50
    else if (textNumber.includes('cuarenta')) return 40
    else if (textNumber.includes('treinta')) return 30
    else if (textNumber.includes('veint')) return 20
    else if (textNumber.includes('dieci')) return 10
    else if (textNumber.includes('quince')) return 10
    else if (textNumber.includes('cator')) return 10
    else if (textNumber.includes('trece')) return 10
    else if (textNumber.includes('doce')) return 10
    else if (textNumber.includes('once')) return 10
    else if (textNumber.includes('diez')) return 10
}

findUnidades = textNumber =>{
    if (textNumber.includes('nueve')) return 9
    if (textNumber.includes('ocho') && !(textNumber.split(' ')[0].includes('ochocientos'))) return 8
    if (textNumber.includes('siete')) return 7
    if (textNumber.includes('seis')) return 6
    if (textNumber.includes('cinco')) return 5
    if (textNumber.includes('quinc')) return 5
    if (textNumber.includes('cuatro')) return 4
    if (textNumber.includes('cator')) return 4
    if (textNumber.includes('tres')) return 3
    if (textNumber.includes('trece')) return 3
    if (textNumber.includes('dos')) return 2
    if (textNumber.includes('doce')) return 2
    if (textNumber.includes('uno')) return 1
    if (textNumber.includes('once')) return 1
}