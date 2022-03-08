function calcularExpoente(base, expoente) {
    let resposta = base
    for (let index = 1; index < expoente; index++) {
        resposta *= base
    }
    return resposta
}

console.log(calcularExpoente(2,3));



// RESPOSTA:

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))