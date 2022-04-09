/*

Programação funcional - Concat e Push.
Crie uma função que receba dois parâmetros: arrayOriginal e segundoArray.
Utilize concat para adicionar segundoArray no arrayOriginal.

Explique a diferença entre os métodos push e concat.

*/

// Funções
function uniaoArray (array1, array2) {

let array3 = array1.concat(array2);

console.log(array3);
}

uniaoArray ([1, 2, 3], [4, 5, 6]);