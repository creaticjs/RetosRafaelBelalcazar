calcEnergy = () => {
    let masa = parseFloat(document.getElementById('masa').value)
    const c = 2.997925*10**10
    if(masa){
        e = c*masa**3
        document.getElementById('result').innerHTML = `La energia es ${e} ergios`

    }
    else document.getElementById('result').innerHTML = 'La masa debe ser un número'
}