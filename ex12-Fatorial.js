function calcularFatorial(numero) {
    let resposta = numero + "! = " + numero
    let calculoFinal = numero
   for (let index = numero-1; index > 0; index--) {
       calculoFinal = calculoFinal * index
       resposta += "." + index
   }
   numero==0?calculoFinal=1:''
   console.log(resposta, " = ", calculoFinal)
}

calcularFatorial(3)
calcularFatorial(4)
calcularFatorial(5)
calcularFatorial(8)
calcularFatorial(0)
calcularFatorial(1)


// Resposta da Apostila

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))