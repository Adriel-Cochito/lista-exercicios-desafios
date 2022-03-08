/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function qtdParOuImpar(vetor) {
    let par = 0
    for (const key in vetor) {
        if (vetor[key] % 2 == 0) {
            par += 1
        }
    }
    console.log(`Total de numeros: ${vetor.length} = Pares: ${par}, Ímpares: ${vetor.length-par}`)
}

const vetor = [2,9,3,4,5,6,7,8,9]
qtdParOuImpar(vetor)