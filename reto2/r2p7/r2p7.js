formatDate = () => {
    let date = document.getElementById('date').value
    dateSplit = date.split(',')
    console.log(dateSplit)
    day = parseInt(dateSplit[0])
    month = dateSplit[1].toLowerCase()
    year = parseInt(dateSplit[2])
    convertMonth(day, month, year)
}

convertMonth = (day, month, year) => {
    if ((day && year) && day >= 1 && day <= 31) {
        switch (month) {
            case 'enero':
                document.getElementById('result').innerHTML = `${day} 1 ${year}`
                break
            case 'febrero':
                document.getElementById('result').innerHTML = `${day} 2 ${year}`
                break
            case 'marzo':
                document.getElementById('result').innerHTML = `${day} 3 ${year}`
                break
            case 'abril':
                document.getElementById('result').innerHTML = `${day} 4 ${year}`
                break
            case 'mayo':
                document.getElementById('result').innerHTML = `${day} 5 ${year}`
                break
            case 'junio':
                document.getElementById('result').innerHTML = `${day} 6 ${year}`
                break
            case 'julio':
                document.getElementById('result').innerHTML = `${day} 7 ${year}`
                break
            case 'agosto':
                document.getElementById('result').innerHTML = `${day} 8 ${year}`
                break
            case 'septiembre':
                document.getElementById('result').innerHTML = `${day} 9 ${year}`
                break
            case 'octubre':
                document.getElementById('result').innerHTML = `${day} 10 ${year}`
                break
            case 'noviembre':
                document.getElementById('result').innerHTML = `${day} 11 ${year}`
                break
            case 'diciembre':
                document.getElementById('result').innerHTML = `${day} 12 ${year}`
                break
            default:
                document.getElementById('result').innerHTML = `Parece que esta fecha no existe`
        }

    }
    else {
        document.getElementById('result').innerHTML = `Parece que esta fecha no existe`
    }
}