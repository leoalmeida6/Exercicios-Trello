# **Arrays**

## Descrição:
Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos para realizar operações de travessia e mutação.

## Criando um Array

~~~javascript
var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
// 2
~~~

## Acessar um item (index) do Array

~~~javascript
var primeiro = frutas[0];
// Maçã

var ultimo = frutas[frutas.length - 1];
// Banana
~~~

## Iterar um Array

~~~javascript
frutas.forEach(function (item, indice, array) {
  console.log(item, indice);
});
// Maçã 0
// Banana 1
~~~

## Adicionar um item ao final do Array

~~~javascript
var adicionar = frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']
~~~

## Remover um item do final do Array

~~~javascript
var ultimo = frutas.pop(); // remove Laranja (do final)
// ['Maçã', 'Banana'];
~~~

## Remover do início do Array

~~~javascript
var primeiro = frutas.shift(); // remove Maçã do início
// ['Banana'];
~~~

## Adicionar ao início do Array

~~~javascript
var adicionar = frutas.unshift('Morango') // adiciona ao início
// ['Morango', 'Banana'];
~~~

## Procurar o índice de um item na Array

~~~javascript
frutas.push('Manga');
// ['Morango', 'Banana', 'Manga']

var pos = frutas.indexOf('Banana');
// 1
~~~

## Remover um item pela posição do índice

~~~javascript
var removedItem = frutas.splice(pos, 1); // é assim que se remove um item
// ['Morango', 'Manga']
~~~

## Remover itens de uma posição de índice

~~~javascript
var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
console.log(vegetais);
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var pos = 1, n = 2;

var itensRemovidos = vegetais.splice(pos, n);
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

console.log(vegetais);
// ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos);
// ['Nabo', 'Rabanete']

Copiar um Array

var copiar = frutas.slice(); // é assim que se copia
// ['Morango', 'Manga']
~~~ 

## Sintaxe

~~~javascript
[element0, element1, ..., elementN]
new Array(element0, element1, ..., elementN)
new Array(arrayLength)
element0, element1, ..., elementN
~~~

Um array JavaScript é inicializado com os elementos contém, exceto no caso onde um único argumento é passado para o construtor do Array e esse argumento é um número (veja o parâmetro arrayLength abaixo). Esse caso especial só se aplica para os arrays JavaScript criados com o construtor Array , e não para literais de array criados com a sintaxe de colchetes [].

## Accessando elementos de um array:
Arrays JavaScript começam com índice zero: o primeiro elemento de um array está na posição 0 e o último elemento está na  posição equivalente ao valor da propriedade length (tamanho) menos 1.

~~~javascript
var arr = ['este é o primeiro elemento', 'este é o segundo elemento'];
console.log(arr[0]);              // exibe 'este é o primeiro elemento'
console.log(arr[1]);              // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe 'este é o segundo elemento'
~~~