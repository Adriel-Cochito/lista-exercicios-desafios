/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

function multiplicaVetores(vetor, numero) {
    let vetorMultiplicado = []
    vetor.forEach(elemento => {
        vetorMultiplicado.push(elemento*numero)
    });
    console.log("=========================")
    console.log("Vetor de entrada: ", vetor)
    console.log("Vetor multiplicado: ", vetorMultiplicado) 
}

function multiplicaMaiorQueCinco(vetor, numero) {
    let vetorMultiplicado = []
    for(const i in vetor) {
        if (vetor[i] > 5) {
            vetorMultiplicado.push(vetor[i]*numero)
        }
    }
    console.log("=========================")
    console.log("Vetor de entrada: ", vetor)
    console.log("Vetor multiplicando maiores que 5: ", vetorMultiplicado) 
}

let vetor1 = [1,2,3,4,5,6,7]
multiplicaVetores(vetor1, 2)
multiplicaMaiorQueCinco(vetor1, 2)