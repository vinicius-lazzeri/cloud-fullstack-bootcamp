/*faça um programa para calcular o valor gasto de combustível em uma viagem. Você terá 3 variáveis, sendo elas:
1 - preço do combustível;
2 - gasto médio de consumo do carro por KM;
3 - distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const fuel = 5.15;
const consumoCar = 13.5;
let distanciaViagem = 300; //em KM

let tripA = Number(distanciaViagem) / Number(consumoCar); //para medir quantos litros serão necessários para o carro realizar uma viagem.

let totalFuelPrice = Number(tripA) * Number(fuel); //para medir o preço do que precisará ser gasto de combustível.

console.log(`Para realizar uma viagem com ${distanciaViagem}km de distância, com um carro que faz um consumo médio de ${consumoCar}km/l na estrada, tendo o preço de combustível tabelado a R$${fuel} o preço do litro, serão necessários R$${totalFuelPrice.toFixed(2)} para realizar essa viagem.`);

