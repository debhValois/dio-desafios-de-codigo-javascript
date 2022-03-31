// DESAFIO #2 DO GRUPO NEOLIFE : COLLATZ | 31/03/2022

/* A seguinte sequência iterativa de Collatz é definida pelo conjunto de inteiros positivos onde:

n -> n/2 (se n é par) n -> 3n + 1 (se n é impar)

Usando as regras acima e começando pelo número 13, nós geraríamos a seguinte sequência:

13  40  20  10  5  16  8  4  2  1

O que pode ser observado dessa sequência (começando no 13 e terminando no 1) é que ela contém 10 items. Embora ainda não esteja matematicamente provado, é esperando que, dado um numero inteiro positivo qualquer, a sequencia sempre chegará em 1.

** Pergunta: Qual inteiro positivo abaixo de 1 milhão, produz a sequencia com mais itens?

** Desafio: Crie um código que calcule a resposta. */


let numEntrada = parseInt(prompt("Digite um número inteiro e positivo: "));
let contador = 1;

function collatz(numEntrada) {
    
    while (numEntrada > 1) {
    
        if (numEntrada % 2 === 0) { // Se o número dado for par...
            numEntrada = numEntrada / 2;
        } else {
            numEntrada = (numEntrada*3) + 1; // se por impar...
        }
        contador++;
    }
    return contador;
}

alert("O número de itens dessa sequência é: " + collatz(numEntrada));

// Calculando a maior sequencia.

let numMaior;
let maiorSequencia = 0;

for (let i = 1; i < 1000000; i++) {
    
        n = 1;
    
        let sequencia = collatz(i);
    
        if (sequencia > maiorSequencia) {
            
            maiorSequencia = sequencia;
            numMaior = i;
        }
}

alert("O número com maior sequência é: " + numMaior + " | Sequência: " + maiorSequencia);