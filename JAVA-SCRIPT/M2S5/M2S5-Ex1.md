Características da Linguagem

O código fonte javascript é incluído no próprio arquivo HTML.

Para isso existe uma tag do HTML que permite identificar e separar o que é script do que é marcação HTML. Esta tag chama-se <script>. Existem ainda algumas outras situações em que é permitido incluir comandos de script no HTML, mas deixaremos para ver alguns exemplos sobre isso mais adiante.

É uma linguagem interpretada (também chamada de linguagem de script).

Isso significa que os comandos javascript são executados um a um diretamente por um interpretador, sem que haja necessidade de compilação como nas linguagens de programação convencionais. No caso do javascript, quem faz o papel do interpretador é o navegador do usuário que, ao receber um arquivo html, executa o script na medida em que encontra os comandos javascript dentro do código HTML.

Javascript é uma linguagem baseada em objetos.

O projeto de programas orientados a objetos tenta tratar um programa como um conjunto de partes individuais (objetos) que executam tarefas distintas, e não como uma seqüência de comandos que executam uma tarefa específica. Objetos similares são agrupados em classes. Numa linguagem orientada a objetos você precisa construir (instanciar) todos os objetos que você for utilizar no seu programa. A linguagem javascript é dita “baseada em objetos” porque ela já possui um conjunto de objetos embutidos. Por exemplo, não é necessário construir um objeto para manusear datas e horas pois em javascript já existe um pronto para ser usado.

Sintaxe parecida com C, C++ e Java

Em termos de sintaxe, a linguagem javascript herdou suas principais construções e comandos da linguagem Java que por sua vez os havia herdado das linguagens C e C++. Devido ao escopo de aplicação limitado de javascript vários recursos existentes nestas outras linguagens foram deliberadamente omitidos.

Programação dirigida por eventos

Esta é uma característica muito importante de javascript. Sempre que alguma coisa que tenha um significado importante acontece ocorre um evento. O clique num botão, o arrastar do mouse, o preenchimento de um campo de um formulário ou o envio do mesmo, são exemplos de eventos provocados pela interação do usuário com a página. Javascript permite que criemos trechos de programa (geralmente implementados na forma de funções) que respondem de acordo com a ocorrência destes eventos. A consequência disso é que a página dexa de ser um documento estático e parece ganhar inteligência, reagindo de acordo com as ações do usuário.

Javascript é independente de plataforma

Numa linguagem de programação convencional, você compila o seu programa gerando um arquivo executável que, se distribuído, só poderá ser executado num ambiente operacional de hardware e software específicos. Como os comandos javascript são interpretados pelo navegador do usuário, não existe este problema. Uma mesma página Web com código javascript poderá ser interpretada pelo Netscape, independentemente do usuário estar utilizando um PC com Windows ou uma máquina RISC com UNIX. Os problemas de compatibilidade que existem são outros e normalmente dizem respeito ao navegador utilizado e suas versões. No decorrer do curso veremos algumas situações em que isso acontece e quais as suas conseqüências. 