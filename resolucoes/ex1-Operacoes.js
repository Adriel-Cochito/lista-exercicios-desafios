function calcular(a, b) {
    let c = a+b
    console.log(a + ' + ' + b + ' = ', a + b)

    c = a - b
    console.log(a + ' - ' + b + ' = '+ c)

    c = a * b
    console.log(a + ' * ' + b + ' = '+ c)

    c = a / b
    console.log(a + ' / ' + b + ' = '+ c)
}

calcular(2, 3)   



// Resposta

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)