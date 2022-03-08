function avaliarAluno(nota) {
    let notaFinal
    var resto = nota % 10

    if (nota <=37) {
        console.log("Aluno reprovado")
    } else if(resto <= 2){
        notaFinal = nota - resto
        console.log(notaFinal);
    } else if (resto >= 3 && resto <= 7) {
        notaFinal = nota + (5 - resto)
        console.log(notaFinal);
    } else {
        notaFinal = nota + (10 - resto)
        console.log(notaFinal);
    }
}

avaliarAluno(34)
avaliarAluno(38)
avaliarAluno(43)
avaliarAluno(42)
avaliarAluno(57)
avaliarAluno(68)



//RESPOSTA:
function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
