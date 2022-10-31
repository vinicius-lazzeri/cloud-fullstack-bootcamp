function chamarNome(nome){
    return nome;
}

function conferirMaioridade(idade){
    if (idade < 18){
        return 'menor de idade';
    } else {
        return 'maior de idade';
    }
}

console.log(`${chamarNome('Vinicius')} é ${conferirMaioridade(24)}!`)
