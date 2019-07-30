console.log('cambio')

function viewMagicSquare() {
    var n = parseInt(document.getElementById('number').value)
    var magicSquare = document.getElementById('cuadrado-magico')
    if (isOdd(n) && (11 >= n) && n >= 3) {
        let square = new Array(n)
        console.log(square)
        console.log(square.length)
        for (var i = 0; i < n; i++) {
            square[i] = new Array(n)
        }

        firstLineMiddle = Math.floor(n/2)
        console.log(firstLineMiddle)

    } else alert('El numero debe ser par y estar entre 3 y 11')

}

isOdd = (n) => ((n % 2 == 0) ? false : true)// Comprobar si es impar

// function buildSquare(arr){
//     for (var i = 0; i <= arr.length; i++) {
//         console.log(arr.length)
//         arr[i] = new Array(arr.length)
//         console.log('paso por for',i)
//     }
// }