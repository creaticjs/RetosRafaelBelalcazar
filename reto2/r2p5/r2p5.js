calcArea = () => {
    let lado1 = parseFloat(document.getElementById('lado1').value)
    let lado2 = parseFloat(document.getElementById('lado2').value)
    let lado3 = parseFloat(document.getElementById('lado3').value)
    let p = (lado1+lado2+lado3)/2
    let area = Math.sqrt(p*(p-lado1)*(p-lado2)*(p-lado3))
    document.getElementById('result').innerHTML = area
}