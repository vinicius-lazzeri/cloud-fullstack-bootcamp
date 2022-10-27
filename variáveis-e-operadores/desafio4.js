/*  
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição do pagamento.

    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:

    À vista débito, recebe 10% de desconto;
    À vista no dinheiro ou PIX, recebe 15% de desconto;
    Em duas vezes, preço normal de etiqueta sem juros;
    Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/
console.log('Débito a vista [1] | À vista no dinheiro/PIX [2] | Parcelado em 2x [3] | Parcelado em 3x ou mais [4]')

const precoProduto = 100;
const operacao = 2;
let precoFinal = 0;
let operacaoEscolhida = '';

switch(operacao){
    case 1:
        precoFinal = Number(precoProduto) - (Number(precoProduto) * (10/100));
        operacaoEscolhida = '[Débito à vista]';
    break;
    case 2:
        precoFinal = Number(precoProduto) - (Number(precoProduto) * (15/100));
        operacaoEscolhida = '[À vista no dinheiro/pix]';
    break;
    case 3:
        precoFinal = Number(precoProduto);
        operacaoEscolhida = '[Parcelado em 2x]'
    break;
    case 4:
        precoFinal = Number(precoProduto) + (Number(precoProduto)*(10/100));
        operacaoEscolhida = '[Parcelado em 3x ou mais]'
    break
    default:
        console.log('Operação inválida, execute o programa novamente de forma adequada.');
        operacaoEscolhida = '[Operação Inválida]'
}

console.log(`O produto, que custa R$${precoProduto.toFixed(2)}, sendo comprado na operação ${operacaoEscolhida} terá como preço final: R$${precoFinal.toFixed(2)}`)