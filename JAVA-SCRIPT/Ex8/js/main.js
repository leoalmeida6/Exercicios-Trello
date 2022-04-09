// Funções
/*

Crie um objeto que possuirá 2 propriedades, ambas do tipo Array:

receitas: [ ]
despesas: [ ]
Agora crie uma função que irá calcular o total de receitas e despesas e
irá mostrar uma mensagem se a família está com saldo positivo ou negativo,
segundo o valor do saldo.

*/

const usuarios = [{
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function calculaSaldo(utilizador) {
  const entradas = utilizador.receitas;
  // e agora juntamos as despesas com o sinal certo:
  utilizador.despesas.forEach(nr => entradas.push(nr * -1));

  return somaNumeros(entradas);
}

function somaNumeros(numeros) {
  return numeros.reduce((sum, nr) => sum + nr, 0);
}

const somas = usuarios.map(calculaSaldo);
console.log(somas);
console.log(somas.map((soma, i) => `${usuarios[i].nome}: ${soma}`).join('\n'));