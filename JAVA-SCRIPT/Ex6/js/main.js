/*

Crie uma função que recebe por parâmetro uma temperatura em Celcius.
Converta a temperatura de Celcius para Fahrenheit.
Exiba a temperatura no console.
A fórmula para converter de Celsius para Fahrenheit é:
temperatura em Celsius vezes 9/5, mais 32.

*/

// Funções
function celsiusToFahrenheit (temperatura) {

    temperatura = (temperatura * 9) / 5 + 32;
    console.log(temperatura);

}

celsiusToFahrenheit(30);