// Escopo e Funções Globais
// Em JavaScript, o escopo se refere à visibilidade das variáveis. As variáveis ​​que são definidas fora de um bloco funcional têm escopo Global . Isso significa que eles podem ser vistos em todos os lugares do seu código JavaScript.

// As variáveis ​​declaradas sem as palavras let- constchave ou são criadas automaticamente no globalescopo. Isso pode criar consequências não intencionais em outras partes do seu código ou ao executar uma função novamente. Você deve sempre declarar suas variáveis ​​com letou const.

// Usando letou const, declare uma variável global nomeada myGlobalfora de qualquer função. Inicialize-o com um valor de 10.

// Dentro da função fun1, atribua 5a oopsGlobal sem usar as palavras-chave letou const.



// Declare the myGlobal variable below this line

let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here

oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}