class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, nasci em ${this.anoDeNascimento} e minha idade é ${this.idade} anos!`)
    }
};

const vini = new Pessoa('Vinicius Lazzeri', 24);

const jose = new Pessoa('Jose Filho', 28);


console.log(vini);
console.log(jose);

vini.descrever();
jose.descrever();