# **JavaScript**

Primeiramente, devemos citar que a linguagem JavaScript é de tipagem dinâmica, ou seja, não é necessário declarar tipo a uma variável, podendo ser modificada posteriormente.

A própria linguagem de programação, neste caso, tem a habilidade de escolher o tipo de dado de acordo com o valor atribuído a variável.

Em nosso artigo “Quais as diferenças entre tipagens: estática ou dinâmica e forte ou fraca”, explicamos quais os conceitos por tipagem estática e dinâmica e também sobre tipagem fraca e forte. É importante a leitura para você entender como o JavaScript lida com os tipos, principalmente se você está acostumado a programar em uma linguagem com tipagem estática e forte.

<hr>

## **Algumas características do Javascript:**

* Exerce controle sobre o HTML e o CSS para manipular comportamentos de páginas web.
* É independente de plataforma.
* Permite a criação de funcionalidades para sites que não podem ser criadas com HTML e CSS.
* O código escrito em Javascript é embutido no próprio arquivo HTML (basta que o programador utilize a tag < script > no momento de escrever as linhas em Javascript.
* Utiliza uma sintaxe familiar, para quem já utiliza Java, C, ou C++.
* Seu modelo de objetos é baseado em protótipos (e não em classes, como é o caso do Java).
* Suporta funções sem requisições especiais de declaração.
* É um tipo de programação dirigida por eventos: possibilita a criação de trechos de programa que respondem a eventos específicos, tais como um clique em um botão.

<hr>

## **Tipos de dados do JavaScript**
Ao programar em JavaScrpit nós precisamos saber quais os tipos de dados que a linguagem trabalha, os principais tipos de dados primitivos são:

**Boolean** - possuem apenas dois valores: verdadeiro ou falso; <br>
**Undefined** - indica que não foi definido um valor; <br>
**Null** - indica que um valor é nulo; <br>
**Number** - armazena valores numéricos; <br>
**String** - armazena textos; <br>
**Symbol** - armazena símbolos; <br>  <br>

Além dos tipos de dados primitivos, nós também temos o tipo **object**, que possibilita trabalharmos com objetos utilizando JavaScript.

<hr>

## **Regras de nomeação de variáveis no JavaScript**
Uma das peculiaridades da linguagem JavaScript é que podemos declarar variáveis de duas formas, utilizando var, comum em outras linguagens, ou utilizando let.

Vale ressaltar que por se tratar de uma linguagem de tipagem dinâmica, ao declarar uma variável não é necessário informar o tipo da variável, por exemplo:

~~~javascript
var idade = 15;
var nome = 'Marina';
let endereco = 'Av. Central 1';
~~~

Ao atribuir o valor 15 para a variável idade, a linguagem já reconhece como uma variável do tipo Number. O mesmo ocorre para a variável nome, ao atribuirmos o valor ‘Marina’ a linguagem reconhece como uma variável do tipo String.

Outras regras devem ser seguidas, como:

* Não declarar variável com palavras reservadas, como let, var, while, for, etc.
* Deve conter somente letras, números e underscore.
* Pode iniciar com uma letra, underscore (_) ou cifrão ($).

<hr>

## **Declarando variáveis com var e let no JavaScript**
No JavaScript nós temos que nos atentar quando vamos declarar variáveis usando var ou let, pois cada uma possuí diferenças que são importantes.

Antes de tudo precisamos explicar que o JavaScript trabalha com escopos, onde cada bloco (funções, condicionais e estruturas de repetição, por exemplo) é um escopo fechado.

Ao utilizarmos var, ele trabalha de forma independente para cada escopo de função, por exemplo:

~~~javascript
var nomeCarro = 'onix';

function carro() {
   var nomeCarro = 'fiesta';
   console.log(nomeCarro);
}

console.log(nomeCarro);
~~~

Analisando o código acima percebemos que ao executar a função carro(), iremos obter como resposta a String fiesta. Se executarmos **console.log(nomeCarro)**, vamos obter o nome onix, pois a variável carro só mudou de nome dentro do escopo da função carro().

Porém se trabalharmos com um IF por exemplo, a situação muda:

~~~javascript
var nomeCarro = 'onix';
var i = 0;

if(i === 0){
	var nomeCarro = 'fiesta';
	console.log(nomeCarro);
}

console.log(nomeCarro);
~~~

Neste caso utilizando var sem o efeito de escopo. Portanto, ao executar **console.log(nomeCarro)** fora do if teremos como retorno a String fiesta e não onix conforme declarado anteriormente.

Ou seja, uma variável sendo declarada como var só tem efeito de escopo em função.

Agora se substituirmos o código acima declarando as variáveis como let:

~~~javascript
let nomeCarro = 'onix';
var i = 0;

if (i === 0){
	let nomeCarro = 'fiesta';
	console.log(nomeCarro);
}

console.log(nomeCarro);
~~~

No caso declaramos a variável nomeCarro dentro do if com o valor fiesta , mas ao executarmos **console.log(nomeCarro)** fora do if será exibido a string onix.

Desta forma respeitando o escopo do bloco.

Obs: Vale lembrar que let tem o mesmo comportamento de escopo que var se tratando do escopo de funções.

<hr>

## Declarando constantes
Assim como em outras linguagens, podemos declarar constantes que possuem valores fixos. Também vale ressaltar que as constantes tem o mesmo comportamento que variáveis definidas como let em relação ao escopo de bloco, como vimos no exemplo acima**.**

Na prática podemos utilizar uma constante para atribuir o valor de PI, por exemplo:

~~~javascript
const PI = 3.14;
~~~
Obs: Por convenção usamos letras maiúsculas separadas por underscore ao declarar uma constante.

>https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
>https://tecnoblog.net/responde/o-que-e-javascript-guia-para-iniciantes/