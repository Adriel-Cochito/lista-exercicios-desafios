
function jurosSimples(capitalInicial, taxaDeJuros, mesesDeAplicacao) {
    let resultado=capitalInicial+(capitalInicial*(taxaDeJuros/100)*mesesDeAplicacao)
    console.log(resultado)
}

function jurosCompostos(capitalInicial, taxaDeJuros, mesesDeAplicacao) {
    capitalInicial+=capitalInicial*(taxaDeJuros/100)**mesesDeAplicacao
    console.log(capitalInicial)
}

jurosSimples(100, 5, 10)
jurosCompostos(100, 5, 10)

console.log("__________________")

jurosSimples(100, 5, 50)
jurosCompostos(100, 5, 50)