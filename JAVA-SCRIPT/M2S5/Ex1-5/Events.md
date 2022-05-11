# Events
Os elementos DOM além de possuirem métodos também possuem eventos. São eles que fazem a interatividades dos elementos no documento, mas não se engane: eventos também são métodos.

<hr>

## Click
Um dos mais usados é o click, quando o usuário clicar no elemento, ele realizará alguma ação.

~~~javascript
  myStart.addEventListener('click', function(event) {

    // Faça algo aqui.

  }, false);
~~~

Os parâmetros do addEventListener() são:

1. O tipo de evento que você deseja (nesse exemplo eu usei o _‘click’_).
2. A função de callback
3. O useCapture faz o evento se atrelar ao pai até chegar ao filho. Ele por padrão é _false_, mas caso você coloque-o como true, ele vai fazer o caminho contrário atrelando o elemento. Você quase sempre vai usá-lo como _false_.

>https://tableless.com.br/entendendo-o-dom-document-object-model/