const meuNome = 'Leonardo';

console.log(meuNome);

//Funções
function reverse (meuNome) {
    if (meuNome === "") {
        return "";
    } else {
        return reverse(meuNome.substr(1)) + meuNome.charAt(0);
    }
}

let reverseStringIs = reverse(meuNome)
console.log(reverseStringIs)