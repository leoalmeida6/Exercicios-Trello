const meuNome = 'Leonardo';

console.log("Nome: " + meuNome);

//Funções

function reverse(meuNome){
    return meuNome.split("").reverse().join("");
}

var nomeInvertido = reverse(meuNome)
console.log("Nome invertido: " + nomeInvertido)

// https://www.delftstack.com/pt/howto/javascript/reverse-string-javascript/