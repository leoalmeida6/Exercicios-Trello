//Classe Pai
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    dizerNome() {
        const span = document.createElement('span');
        span.innerText = `Este réptil é chamado de ${this.nome}.\n`;

        document.body.appendChild(span);
    }
}

//Classe Filho
class Repeteis extends Animal {
    constructor(nome, habitat) {
        super(nome);
        this.habitat = habitat;
    }

    viveEm() {
        const span = document.createElement('span');
        span.innerText = `Vive em ${this.habitat}.\n`;

        document.body.appendChild(span);
    }

    dizerNome() {
        const span = document.createElement('span');
        span.innerText = `Este réptil é chamado de ${this.nome}.\n`;

        document.body.appendChild(span);
    }
}

//Classe Filho
class Mamiferos extends Animal {
    constructor(nome, alimentacao) {
        super(nome);
        this.alimentacao = alimentacao;
    }

    seAlimentaDe() {
        const span = document.createElement('span');
        span.innerText = `Se alimenta de carne e vegetais.\n`;

        document.body.appendChild(span);
    }
}

//Classe Neto
class Cobra extends Mamiferos {
    constructor(nome, habitat, venenosa) {
        super(nome, habitat);
        this.venenosa = venenosa;
    }

    viveEm() {
        const span = document.createElement('span');
        span.innerText = `Vive em ${this.habitat}.\n`;

        document.body.appendChild(span);
    }

    dizerSeEhVenenosa() {
        if (this.venenosa == true) {
            const span = document.createElement('span');
            span.innerText = `${this.nome} é venenosa!.\n`;

            document.body.appendChild(span);
        } else {
            const span = document.createElement('span');
            span.innerText = `${this.nome} NÃO é venenosa!.\n`;

            document.body.appendChild(span);
        }
    }

}

//Classe Neto
class Leao extends Mamiferos {
    constructor(nome, alimentacao, sexo) {
        super(nome, alimentacao);
        this.sexo = sexo;
    }

    dizerNome() {
        if (this.sexo == 'M') {
            const span = document.createElement('span');
            span.innerText = `Nome: ${this.nome}.\n`;

            document.body.appendChild(span);
        } else {
            const span = document.createElement('span');
            span.innerText = `Nome: Leoa.\n`;

            document.body.appendChild(span);
        }
    }

}

//Classe Neto
class Cachorro extends Mamiferos {
    constructor(nome, alimentacao, som) {
        super(nome, alimentacao);
        this.som = som;
    }

    emitirSom() {
        const span = document.createElement('span');
        span.innerText = `Som: ${this.som}\n`;

        document.body.appendChild(span);
    }


    seAlimentaDe() {
        const span = document.createElement('span');
        span.innerText = `Se alimenta de carne e vegetais.\n`;

        document.body.appendChild(span);
    }

}


// LEAO - LEOA
const leao = new Leao('Simba', 'carne', 'M');
leao.seAlimentaDe();
leao.dizerNome();

const leoa = new Leao('Simba', 'carne', 'F');
leoa.seAlimentaDe();
leoa.dizerNome();


//CACHORRO
const cachorro = new Cachorro('Bob', 'ração', 'ROOF-ROOF!');
cachorro.emitirSom();
cachorro.seAlimentaDe();


//COBRA
const anaconda = new Cobra('Ana Conda', 'Floresta', true);
anaconda.dizerNome();
anaconda.dizerSeEhVenenosa();

const jiboia = new Cobra('Celeste', 'Castelo', false);
jiboia.dizerNome();
jiboia.dizerSeEhVenenosa();