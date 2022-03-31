/* EXIBINDO NUMEROS PARES

Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

** Entrada : você receberá 1 valor inteiro N, onde N > 0.

** Saída : exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

- Exemplo de Entrada: 6
- Exemplo de Saída: 2, 4, 6 */

let entrada = parseInt(gets());
for (contador = 1; contador <= entrada; contador++) {
    if (contador % 2 == 0) {
        console.log(contador);
    }
}