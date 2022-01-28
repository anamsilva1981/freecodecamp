// Escopo global vs. local em funções
// É possível ter variáveis locais e globais com o mesmo nome. Quando você faz isso, a variável local tem precedência sobre a variável global.

// Neste exemplo:

// const someVar = "Hat";

// function myFun() {
//   const someVar = "Head";
//   return someVar;
// }
// A função myFunretornará a string Headporque a versão local da variável está presente.

// Adicione uma variável local à myOutfitfunção para substituir o valor de outerWearpela string sweater.



var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";

  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);