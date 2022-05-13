const jogadoresSelecao94 = [
    {
        nome: 'Taffarel',
        posicao: 'Goleiro',
    },
    {
        nome: 'Jorginho',
        posicao: 'Lateral Direito',
    },
    {
        nome: 'Ricardo Rocha',
        posicao: 'Zagueiro',
    },
    {
        nome: 'Mauro Silva',
        posicao: 'Volante',
    },
    {
        nome: 'Bebeto',
        posicao: 'Atacante',
    },
    {
        nome: 'Romário',
        posicao: 'Atacante',
    },
    {
        nome: 'Dunga',
        posicao: 'Volante',
    },
];

const tabela = document.createElement('table');
const caption = document.createElement('caption');
const thNome = document.createElement('th');
const thIdade = document.createElement('th');

caption.innerText = 'Jogadores Seleção 94'
thNome.innerText = 'Nome';
thIdade.innerText = 'Posição';

document.body.appendChild(tabela);
tabela.appendChild(caption);
tabela.appendChild(thNome);
tabela.appendChild(thIdade);

jogadoresSelecao94.forEach(valorAtual => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td1.innerText = valorAtual.nome;
    td2.innerText = valorAtual.posicao;

    tabela.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
});