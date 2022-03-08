/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function maiorNoArray(vetor) {
    console.log("Maior numero: ",Math.max.apply(null, vetor))
    console.log("Menor numero: ",Math.min.apply(null, vetor))
}

let vetor1 = [2,1,70,9,4]
let vetor2 = [2,-1,0,9,4]
maiorNoArray(vetor1)
maiorNoArray(vetor2)



// Resposta da Apostila:
function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))