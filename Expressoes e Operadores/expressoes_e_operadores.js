/* Expressões e Operadores
    -Expressions
    -Operators
        Binary
        Unary
        Ternary


    expressões são qualquer linha de codigo que resolve alguma coisa
*/
// Esse é o único caso dentro do JS que precisa de ; por ser uma variavel seguida por uma função autoexecutavel, ele entende como tudo junto apos a inicialização da variável
let number = 1; // expressão

// (function () {
//     console.log('alo')
// })()

console.log(number + 1) // operador binario por causa dos 2 valores 
console.log(++number) // operador unario, apenas um elemento que esta sendo incrementado, typeof segue o mesmo exemplo
console.log(true ? 'alo' : 'nada') // operador ternario, unico caso que permite o uso de 3 operadores