/* ir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function media(vetor) {
    let media = 0
    for( const i in vetor) {
        media += vetor[i]
    }
    console.log(media / vetor.length)
}

let vetor = [3,4,5,4]
media(vetor)



//Resolução da apostila:
function mediaVetor (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }
    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))