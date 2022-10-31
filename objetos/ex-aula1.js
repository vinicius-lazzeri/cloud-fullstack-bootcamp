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

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome} `)
    } else if(p1.idade === p2.idade){
        console.log(`${p1.nome} e ${p2.nome} são da mesma idade!`)
    } else{
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome} `)
    }
}

const vini = new Pessoa('Vinicius', 24);
const jose = new Pessoa('José', 28);

compararPessoas(vini, jose);