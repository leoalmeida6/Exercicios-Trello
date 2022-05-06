function aluno(nome, idade, turma, sexo) {

    const nomeAluno = nome;
    const idadeAluno = idade;
    let turmaAluno = turma;
    const sexoAluno = sexo;

    function imprimeDados() {
        const span = document.createElement('span');
        const h1 = document.createElement('h1');

        h1.innerText = 'Dados do aluno:';
        span.innerText = (`Nome: ${this.nomeAluno} | Idade: ${this.idadeAluno} anos | Turma: ${this.turmaAluno} | Sexo: ${this.sexoAluno}\n`)

        document.body.appendChild(h1);
        document.body.appendChild(span);
    }

    return {

        getNome: () => nomeAluno,
        getIdade: () => idadeAluno,
        getTurma: () => turmaAluno,
        getTurma: () => sexoAluno,
        setTurma: () => turmaAluno = novaTurma,
        infoAluno,
    }
}