function verificaDivisao(num) {
    console.log(num % 3 == 0)
}

verificaDivisao(6)
verificaDivisao(7)



// Resposta da apostila
function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))