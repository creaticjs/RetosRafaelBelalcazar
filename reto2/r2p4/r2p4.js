calcHyp = () => {
    let lado1 = parseFloat(document.getElementById('lado1').value)
    let lado2 = parseFloat(document.getElementById('lado2').value)
    h= Math.sqrt(lado1**2+lado2**2)
    document.getElementById('result').innerHTML = h
}