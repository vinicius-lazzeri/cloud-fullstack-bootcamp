function calcularImc(peso, altura){
    return Number(peso) / (Number(altura) ^ 2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return `Seu IMC é: ${imc.toFixed(2)} | Abaixo do peso!`;
    } else if(imc >= 18.5 && imc < 25){
        return `Seu IMC é: ${imc.toFixed(2)} | Peso ideal!`;
    } else if(imc >= 25 && imc < 30){
        return `Seu IMC é: ${imc.toFixed(2)} | Acima do peso!`;
    } else if(imc >= 30 && imc < 40){
        return `Seu IMC é: ${imc.toFixed(2)} | Obeso!`;
    } else{
        return `Seu IMC é: ${imc.toFixed(2)} | Obesidade grave!`;
    }
}
//main
(function(){
    const altura = 1.70; //em METROS!
    const peso = 82;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
