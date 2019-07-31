function findForce() {
    let masa1 = parseFloat(document.getElementById('masa1').value)
    let masa2 = parseFloat(document.getElementById('masa2').value)
    const g = 6.673 * 10 ** -8
    let dinstance = parseFloat(document.getElementById('distance').value)
    force = (g * masa1 * masa2) / dinstance
    document.getElementById('result').innerHTML = force
}