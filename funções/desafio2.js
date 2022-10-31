function aplicarDesconto(precoProduto, valorDesconto){
    return (precoProduto - (precoProduto * (valorDesconto / 100)));
}

function aplicarJuros(precoProduto, valorJuros){
    return (precoProduto + (precoProduto * (valorJuros / 100)));
}

const precoProduto = 100;
const operacao = 6;
let precoFinal = 0;
let operacaoEscolhida = '';

switch(operacao){
    case 1:
        precoFinal = aplicarDesconto(precoProduto, 10);
        operacaoEscolhida = '[Débito à vista]';
        console.log(`O produto, que custa R$${precoProduto.toFixed(2)}, sendo comprado na operação ${operacaoEscolhida} terá como preço final: R$${precoFinal.toFixed(2)}`)
    break;
    case 2:
        precoFinal = aplicarDesconto(precoProduto, 15);
        operacaoEscolhida = '[À vista no dinheiro/pix]';
        console.log(`O produto, que custa R$${precoProduto.toFixed(2)}, sendo comprado na operação ${operacaoEscolhida} terá como preço final: R$${precoFinal.toFixed(2)}`)
    break;
    case 3:
        precoFinal = Number(precoProduto);
        operacaoEscolhida = '[Parcelado em 2x]'
        console.log(`O produto, que custa R$${precoProduto.toFixed(2)}, sendo comprado na operação ${operacaoEscolhida} terá como preço final: R$${precoFinal.toFixed(2)}`)
    break;
    case 4:
        precoFinal = aplicarJuros(precoProduto, 10);
        operacaoEscolhida = '[Parcelado em 3x ou mais]'
        console.log(`O produto, que custa R$${precoProduto.toFixed(2)}, sendo comprado na operação ${operacaoEscolhida} terá como preço final: R$${precoFinal.toFixed(2)}`)
    break
    default:
        console.log('Operação inválida, execute o programa novamente de forma adequada.');
        operacaoEscolhida = '[Operação Inválida]'
}
