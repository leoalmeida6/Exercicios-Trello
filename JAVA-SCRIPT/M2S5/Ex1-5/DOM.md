# DOM - Document Obejct Model

## Entendendo o DOM

Você estudou bastante HTML, criou suas primeiras tags, aprendeu CSS, fez formulários bonitos, botões incríveis, páginas responsivas e começou mostrar para todo mundo como aquilo é incrível, mas chega uma hora que você deseja dar um passo a mais no seu aprendizado e se pergunta: ”Mas como eu posso dar movimento a minha página? Queria tanto que aquele botão por exemplo mudasse algo nela!”. É aí que entra o DOM, algo que constantemente você ouve falar por aí, mas não sabe explicar ao certo o que é.

Sabe aquelas animações legais que você vê por aí e você fala “Uau, queria tanto fazer algo assim, mas como?”, elas são feitas manipulando o DOM (Document Object Model), e esse artigo vai te explicar do zero o que ele é e como manipulá-lo.

## Então, o que é o DOM?
O DOM (Document Object Model) é uma interface que representa como os documentos HTML e XML são lidos pelo seu browser. Após o browser ler seu documento HTML, ele cria um objeto que faz uma representação estruturada do seu documento e define meios de como essa estrutura pode ser acessada. Nós podemos acessar e manipular o DOM com JavaScript, é a forma mais fácil e usada.

## Quais as vantagens do DOM?
Com ele você tem infinitas possibilidades, você pode criar aplicações que atualizam os dados da página sem que seja necessário uma atualização. Pode também criar aplicações que são customizáveis pelo usuário, mudar o layout da página sem que seja necessário atualização. Arrastar, mover, excluir elementos. Ou seja, você tem infinitas possibilidades, milhares de coisas que você pode fazer manipulando o DOM, basta você usar sua criatividade.

<hr>

# Manipulando o DOM
Agora vamos a parte mais legal de todas: manipular o DOM. Primeiramente, vamos criar um HTML como exemplo para mostrar como os métodos e os eventos funcionam.

O HTML:

~~~html
  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Entendo o DOM (Document Object Model)</title>
  </head>
  <body>
      <div class="container">
          <h1><time>00:00:00</time></h1>
          <button id="start">Start</button>
          <button id="stop">Stop</button>
          <button id="reset">Reset</button>
      </div>
  </body>
  </html>
~~~

Bem simples, agora vamos aprender um pouco sobre os métodos do DOM, é com eles que vamos pegar nossos elementos e criar interatividade.

## Métodos
O DOM possui muitos métodos, são eles que fazem a ligação entre os nodes (elementos) e os eventos.

<hr>

## **getElementById()**
Esse método retorna o elemento que estiver contendo o nome do ID passado. Como os IDs devem ser únicos, é um método muito útil para pegar apenas o elemento desejado.

~~~javascript
  var myStart = document.getElementsById('start');
~~~

**myStart**: elemento específico que se equipara com o seletor passado. <br>
**start**: seletor passado, caso não houvesse nenhum ele retornaria null.

<hr>

## **getElementsByClassName()**
Esse método retorna um _HTMLCollection_ de todos elementos que estiverem contendo o nome da classe passada.

~~~javascript
  var myContainer = document.getElementsByClassName('container');
~~~

**myContainer**: elemento específico que se equipara com o seletor passado. <br>
**.container**: seletor passado, caso não houvesse nenhum ele retornaria null.

<hr>

## **getElementsByTagName()**
Na mesma maneira do método acima, ele também retorna uma HTMLCollection mas com uma diferença: esse método retorna todos elementos contendo a tag name passada.

~~~javascript
  var buttons = document.getElementsByTagName('button');
~~~

**buttons**: elemento específico que se equipara com o seletor passado. <br>
**button**: tag name passada.

<hr>

## **querySelector()**
Retorna o primeiro elemento que se equipara ao seletor CSS passado. Lembrando que o seletor deve seguir a sintaxe CSS. Caso não tenha nenhum seletor, ele retornará _null.

~~~javascript
  var resetButton = document.querySelector('#reset');
~~~

**resetButton**: primeiro elemento que se equipara com o seletor passado. <br>
**#reset**: seletor passado, caso não houvesse nenhum ele retornaria null.

<hr>

## **querySelectorAll()**
Muito igual ao querySelector(), mas ele tem apenas uma diferença: retorna todos elementos que se equiparam ao seletor CSS passado. O seletor também deve seguir a sintaxe CSS, caso não haja nenhum ele retornará null.

~~~javascript
  var myButtons = document.querySelector('#buttons');
~~~

**myButtons**: elementos que se equiparam com o seletor passado. <br>
**#buttons**: seletor passado, como nesse caso não há nenhum seletor com esse nome, ele retorna null.

Esses são apenas 3 métodos do DOM, existem vários e alguns são bastante usados, por exemplo o createElement() que cria um novo elemento HTML usando o nome da da tag a ser criada, o setAttribute() que você pode setar novos atributos para elementos HTML e muitos outros.