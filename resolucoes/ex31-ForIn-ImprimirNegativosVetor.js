/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function imprimeNegativos(vetor) {
    let qtd = 0
    for (const key in vetor) {
        if (vetor[key] < 0) {
           qtd += 1 
        }
    }
    console.log(qtd, "numeros negativos no vetor")
}

let vetor = [-12,-4,-1,-6,-8,0,6]
imprimeNegativos(vetor, "numeros negativos no vetor")


// Resposta da Apostila:
function numerosNegativos (vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))