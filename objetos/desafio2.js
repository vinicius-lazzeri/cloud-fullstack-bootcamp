/*
    2. Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC= peso/(altura^2));
    Crie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura, dizendo o valor do seu IMC.
*/

class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome, altura, peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    análiseDeImc(){
        let imc = this.peso/(this.altura ^ 2);
        imc = imc.toFixed(1);
        
        if(imc < 18.5){
            return `${this.nome} tem ${this.altura}m de altura, pesa ${this.peso}kgs e tem o IMC = ${imc}! Abaixo do peso!`;
        } else if(imc >= 18.5 && imc < 25){
            return `${this.nome} tem ${this.altura}m de altura, pesa ${this.peso}kgs e tem o IMC = ${imc}! Peso ideal!`;
        } else if(imc >= 25 && imc < 30){
            return `${this.nome} tem ${this.altura}m de altura, pesa ${this.peso}kgs e tem o IMC = ${imc}! Acima do peso!`;
        } else if(imc >= 30 && imc < 40){
            return `${this.nome} tem ${this.altura}m de altura, pesa ${this.peso}kgs e tem o IMC = ${imc}! Obeso!`;
        } else{
            return `${this.nome} tem ${this.altura}m de altura, pesa ${this.peso}kgs e tem o IMC = ${imc}! Obesidade grave!`;
        }
    }
}

const jose = new Pessoa('José', 1.75, 70);
const renan = new Pessoa ('Renan', 1.75, 63);
const vini = new Pessoa('Vinicius', 1.70, 82);

console.log(jose.análiseDeImc());
console.log(renan.análiseDeImc());
console.log(vini.análiseDeImc());