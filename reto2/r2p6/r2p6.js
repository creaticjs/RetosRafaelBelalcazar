formatHora = () => {
    let militarTime = document.getElementById('hora').value
    time = militarTime.split(':')
    hora = parseInt(time[0])
    minutes = parseInt(time[1])
    if (hora >= 0 && hora <= 23 && minutes >= 0 && minutes < 60) { //Comprobar que la hora es valida
        if (hora > 12) {
            hora -= 12            
        }
        result = `${hora}:${minutes}`
        document.getElementById('result').innerHTML = result
    }
    else {
        document.getElementById('result').innerHTML = 'Formato incorrecto'
    }
}