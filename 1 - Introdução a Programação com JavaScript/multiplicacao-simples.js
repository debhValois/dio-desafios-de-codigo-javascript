/* MULTIPLICAÇÃO SIMPLES

Você receberá dois valores inteiros. Faça a leitura e em seguida calcule o produto entre estes dois valores. Atribua esta operação à variável PROD, mostrando esta de acordo com a mensagem de saída esperada (exemplo abaixo).   

** Entrada : contém 2 valores inteiros.

** Saída : exiba a variável PROD conforme exemplo abaixo, tendo obrigatoriamente um espaço em branco antes e depois da igualdade.

- Exemplos de Entrada: 3, 9
- Exemplos de Saída: PROD = 27 */

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1*valor2;
console.log("PROD = " + total);