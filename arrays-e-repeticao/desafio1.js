//1. Crie um programa que dado um número imprima a sua tabuada de 1 a 10.

const number = 26;

for(let i = 1; i <= 10; i++){
    let tabuada = number * [i];
    console.log(`${number} x ${i} = ${tabuada}`);
};