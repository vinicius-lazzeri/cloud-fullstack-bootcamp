/*  o IMC - Índice de massa corporal é um critério da organização mundial da saúde  para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

- Abaixo de 18.5 = abaixo do peso;
- Entre 18.5 e 25 = peso normal;
- Entre 25 e 30 = acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade grave;
*/

const altura = 1.70; //em METROS!
const peso = 82;
const imc = Number(peso) / (Number(altura) ^ 2);

if(imc < 18.5){
    console.log(`Seu IMC é: ${imc.toFixed(2)} | Abaixo do peso!`);
} else if(imc >= 18.5 && imc < 25){
    console.log(`Seu IMC é: ${imc.toFixed(2)} | Peso ideal!`);
} else if(imc >= 25 && imc < 30){
    console.log(`Seu IMC é: ${imc.toFixed(2)} | Acima do peso!`);
} else if(imc >= 30 && imc < 40){
    console.log(`Seu IMC é: ${imc.toFixed(2)} | Obeso!`);
} else{
    console.log(`Seu IMC é: ${imc.toFixed(2)} | Obesidade grave!`);
}