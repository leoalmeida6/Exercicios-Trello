function aluno(nome, idade, turma, sexo) {

    const nomeAluno = nome;
    const idadeAluno = idade;
    let turmaAluno = turma;
    const sexoAluno = sexo;

    function dadosAluno() {
        const span = document.createElement('span');
        const h1 = document.createElement('h1');

        h1.innerText = 'Dados do aluno:';
        span.innerText = (`Nome: ${nomeAluno} | Idade: ${idadeAluno} anos | Turma: ${turmaAluno} | Sexo: ${sexoAluno}\n`)

        document.body.appendChild(h1);
        document.body.appendChild(span); 
    }

    return {

        getNome: () => nomeAluno,
        getIdade: () => idadeAluno,
        getTurma: () => turmaAluno,
        getTurma: () => sexoAluno,

        setTurma: () => turmaAluno = novaTurma,
        dadosAluno,
    }
    
}

const leonardo = aluno('Leonardo', 26, 'Sênior', 'Masculino');
leonardo.dadosAluno();