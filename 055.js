// Entendendo o valor indefinido retornado de uma função
// Uma função pode incluir a returninstrução, mas não necessariamente. Caso a função não tenha uma returninstrução, quando você a chama, a função processa o código interno, mas o valor retornado é undefined.

// Exemplo

// let sum = 0;

// function addSum(num) {
//   sum = sum + num;
// }

// addSum(3);
// addSumé uma função sem uma returninstrução. A função irá alterar a sumvariável global, mas o valor retornado da função é undefined.

// Crie uma função addFivesem argumentos. Esta função adiciona 5 à sumvariável, mas seu valor retornado é undefined.



// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}   

function addFive() {
  sum += 5;
}