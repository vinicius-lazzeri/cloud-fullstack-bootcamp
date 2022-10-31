/*
    1 - Crie uma classe para representar carros.
    Os carros possuem modelo, ano e um consumo médio de combustível Km/l.
    Crie um método que dado a quantidade de Km e o preço do combustível, nos
    dê o valor gasto em reais para realizar um percurso.
*/

class Car {
    modelo;
    ano;
    consumo;

    constructor(modelo, ano, consumo){
        this.modelo = modelo;
        this.ano = ano;
        this.consumo = consumo;
    };
    relatório(){
        const preçoGasolina = 5.12;
        const percurso = 715;
        let calculoParaPercurso = percurso / this.consumo;
        let custoViagem = calculoParaPercurso * preçoGasolina;
        custoViagem = custoViagem.toFixed(2);
        
        console.log(`Uma viagem de ${percurso}KM, num ${this.modelo} ${this.ano} com consumo de ${this.consumo} nas rodovias, terá o custo de R$${custoViagem}!`)
    }
};

const carro1 = new Car('Honda Civic', 2016, 13.5);
const carro2 = new Car('Fiat UNO', 2010, 16);

carro1.relatório();
carro2.relatório();