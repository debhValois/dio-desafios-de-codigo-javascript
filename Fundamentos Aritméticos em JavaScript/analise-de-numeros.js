/* ANALISE DE NUMEROS

Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

** Entrada : você receberá 5 valores inteiros. 
** Saída : exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.
 
- Exemplo de Entrada:-5 , 0, -3, -4, 12
- Exemplo de Saída: 3 valor(es) par(es), 2 valor(es) impar(es), 1 valor(es) positivo(s), 3 valor(es) negativo(s) */

let valor1 = parseFloat(gets());
let valor2 = parseFloat(gets());
let valor3 = parseFloat(gets());
let valor4 = parseFloat(gets());
let valor5 = parseFloat(gets());
let nums = [valor1, valor2, valor3, valor4, valor5];
pares = 0
impares = 0
positivos = 0
negativos = 0
for (i=0; i<=4; i++) {
  if (nums[i] % 2 == 0) {
    pares += 1
  }else {
    impares += 1
  }
  if (nums[i] > 0) {
    positivos += 1
  }else if (nums[i] < 0) {
    negativos += 1
}
}
console.log(pares + ' valor(es) par(es)')
console.log(impares + ' valor(es) impar(es)')
console.log(positivos + ' valor(es) positivo(s)')
console.log(negativos + ' valor(es) negativo(s)')