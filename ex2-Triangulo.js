function verificaTriangulo(a, b, c) {
    if (a == b && b == c) {
        console.log("Equilátero!")
    } else if(a == b || a == c || b == c) {
        console.log("Isósceles!")
    } else {
        console.log("Escaleno!")
    }
}

verificaTriangulo(2,2,2)
verificaTriangulo(2,2,3)
verificaTriangulo(10,2,3)



// REsposta:
function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));