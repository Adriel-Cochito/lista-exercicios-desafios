/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function calculaFaixa(vetor) {
    let num = 0
    for (const key in vetor) {
        if (vetor[key] >= 10 && vetor[key] <= 20) {
            num += 1
        }
    }
    console.log(`Numeros entre 10 e 20: ${num}, Numeros que não estão: ${vetor.length - num}`)
}

let vetor = [1,11,56,67,5,2,15,78]
calculaFaixa(vetor)

