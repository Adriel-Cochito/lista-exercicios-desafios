function anoBissexto(ano) {
    let resposta = (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0 
    resposta?console.log("É ano Bissexto"):console.log("Não é ano Bissexto")
}

anoBissexto(4)
anoBissexto(5)
anoBissexto(100)
anoBissexto(400)
anoBissexto(101)
anoBissexto(800)
anoBissexto(200)
anoBissexto(300)


// Resposta da Apostila:
function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))



