/* QUANTIDADE DE NUMEROS POSITIVOS

Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

** Entrada : você receberá seis valores, negativos e/ou positivos.

** Saída : wxiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.

- Exemplo de Entrada: 7, -5, 6, -3.4, 4.6, 12
- Exemplo de Saída: 4 valores positivos */

let valor1 = parseFloat(gets());
let valor2 = parseFloat(gets());
let valor3 = parseFloat(gets());
let valor4 = parseFloat(gets());
let valor5 = parseFloat(gets());
let valor6 = parseFloat(gets());

let valores = []

if (valor1 >0){
  valores.push(valor1)}

if (valor2 >0){
  valores.push(valor2)}

if (valor3 >0){
  valores.push(valor3)}

if (valor4 >0){
  valores.push(valor4)}

if (valor5 >0){
  valores.push(valor5)}

if (valor6 >0){
  valores.push(valor6)}

let quantidade_positivo = valores.length
console.log(quantidade_positivo + ' valores positivos')