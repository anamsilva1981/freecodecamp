// Escopo e Funções Locais
// As variáveis ​​que são declaradas dentro de uma função, assim como os parâmetros da função, têm escopo local . Isso significa que eles são visíveis apenas dentro dessa função.

// Aqui está uma função myTestcom uma variável local chamada loc.

// function myTest() {
//   const loc = "foo";
//   console.log(loc);
// }

// myTest();
// console.log(loc);
// A myTest()chamada de função exibirá a string foono console. A console.log(loc)linha lançará um erro, pois locnão está definido fora da função.

// O editor tem dois console.logs para ajudá-lo a ver o que está acontecendo. Verifique o console enquanto codifica para ver como ele muda. Declare uma variável local myVardentro myLocalScopee execute os testes.

// Observação: o console ainda exibirá ReferenceError: myVar is not defined, mas isso não fará com que os testes falhem.



function myLocalScope() {
    // Only change code below this line
  
  var myVar = 1;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);