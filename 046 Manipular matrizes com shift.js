// Manipular matrizes com shift ()

// pop()sempre remove o último elemento de uma matriz. E se você quiser remover o primeiro?

// É aí que .shift()entra. Funciona exatamente como .pop(), exceto que remove o primeiro elemento em vez do último.

// Exemplo:

// const ourArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourArray.shift();
// removedFromOurArrayteria um valor da string Stimpsone ourArrayteria ["J", ["cat"]].

// Use a .shift()função para remover o primeiro item myArraye atribuir o valor "deslocado" a uma nova variável removedFromMyArray,.



// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

const removedFromMyArray = myArray.shift();