/* creva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

function valoresEntre(valor1, valor2) {
    console.log("=============")
    for(i = Math.min(valor1, valor2); i < Math.max(valor1, valor2); i++) {
        if (i % 2 != 0 && i >= 0 && i <= 100) {
            console.log(i)
        } 
    }
}

valoresEntre(30, 20)
valoresEntre(-30, 20)
valoresEntre(85, 200)




//Resposta da apostila:
function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }

    for (let i = inicio; i <= fim; i++) {        
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

imprimirImpares(19, 3)