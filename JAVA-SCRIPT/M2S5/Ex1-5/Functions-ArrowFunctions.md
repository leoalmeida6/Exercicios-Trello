# Functions e Arrow Functions

## Functions
De modo geral, função é um "subprograma" que pode ser chamado por código externo (ou interno no caso de recursão) à função. Assim como o programa em si, uma função é composta por uma sequência de instruções chamada corpo da função. Valores podem ser passados para uma função e ela vai retornar um valor.

Em JavaScript, funções são objetos de primeira classe, pois elas podem ter propriedades e métodos como qualquer outro objeto. O que as difere de outros objetos é que as funções podem ser chamados. Em resumo, elas são objetos Function.

## Descrição
Toda função em JavaScript é um objeto Function. Veja Function para informação das propriedades e métodos dos objetos Function.

Funções não são como procedimentos (procedure). Uma função sempre retorna um valor, mas um procedimento pode ou não retornar um valor.

Para retornar um valor diferente do padrão, uma função deve ter uma instrução return que específica o valor a ser retornado. Uma função sem um return retornará um valor padrão. No caso de um método construtor chamado com a palavra reservada new, o valor padrão é o valor do parâmetro this. Para todas as outras funções, o valor padrão de retorno é undefined.

Os parâmetros de uma função são chamados de argumentos da função. Argumentos são passados para a função por valor. Se uma função muda o valor de um argumento, esta mudança não é refletida globalmente ou na chamada da função. Contudo, referência de objetos são valores também, e eles são especiais: se a função muda as propriedades do objeto referenciado, estas mudanças são visíveis fora da função, como é mostrado no exemplo a seguir:

~~~javascript
/* Declare a função 'minhaFunção' */
function minhaFuncao(objeto) {
   objeto.marca = "Toyota";
 }

 /*
  * Declare a variável 'meucarro';
  * crie e inicialize um novo Objeto;
  * atribua referência para 'meucarro'
  */
 var meucarro = {
   marca: "Honda",
   modelo: "Accord",
   ano: 1998
 };

 /* Exibe 'Honda' */
 console.log(meucarro.marca);

 /* Passe a referência do objeto para a função */
 minhaFuncao(meucarro);

 /*
  * Exibe 'Toyota' como valor para a propriedade 'marca'
  * do objeto, mudado pela função.
  */
 console.log(meucarro.marca);
 ~~~

A palavra reservada **_this_** não se refere a função sendo executada no momento, então você deve referenciar um objeto Function pelo nome, mesmo dentro do corpo da função.

<hr>

## Arrow functions

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

~~~javascript
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
~~~

## Sintaxe básica
~~~javascript

(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
(singleParam) => { statements }
singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
() => { statements }
~~~

## Descrição

Dois fatores influenciaram a introdução das arrow functions: funções mais curtas e a inexistência da palavra chave this.

## Funções mais curtas

~~~javascript
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) {
  return element.length;
}); // esta sentença retorna o array: [8, 6, 7, 9]

// A função regular acima pode ser escrita como a arrow function abaixo
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando só existe um parâmetro, podemos remover os parênteses envolvendo os parâmetros:
elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando a única sentença em uma arrow function é `return`, podemos remover `return` e remover
// as chaves envolvendo a sentença
elements.map(element => element.length); // [8, 6, 7, 9]

// Neste caso, porque só precisamos da propriedade length, podemos usar o parâmetro de destruição (destructing parameter):
// Note que a string `"length"` corresponde a propriedade que queremos obter enquanto que a
// obviamente propriedade não especial `lengthFooBArX` é só o nome de uma variável que pode ser mudado
// para qualquer nome válido de variável que você quiser
elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// Esta atribuição de parâmetro de destruição (destructing parameter) pode ser escrita como visto abaixo. Entretanto, note que
// não há um específico `"length"` para selecionar qual propriedade nós queremos obter. Ao invés disso, o nome literal
// da própria variável `length` é usado como a propriedade que queremos recuperar do objeto.
elements.map(({ length }) => length); // [8, 6, 7, 9]
~~~

>https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions
>https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions