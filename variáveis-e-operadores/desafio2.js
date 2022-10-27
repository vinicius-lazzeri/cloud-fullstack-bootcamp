/*  Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota1 + nota2 + nota3) / 3;

    Classificação:
    - Média menor que 5: reprovação;
    - Média entre 5 e 7: recuperação;
    - Média acima de 7: aprovado;
*/

const nota1 =4.25;
const nota2 = 4.25;
const nota3 = 5.6;

const mediaDasNotas = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

if(mediaDasNotas <= 4.9){
    console.log(`A média do aluno foi = ${mediaDasNotas.toFixed(2)} | Aluno REPROVADO!`)
} else if(mediaDasNotas > 4.9 && mediaDasNotas <= 6.9)
    console.log(`A média do aluno foi = ${mediaDasNotas.toFixed(2)} | Aluno em RECUPERAÇÃO!`)
else {
    console.log(`A média do aluno foi = ${mediaDasNotas.toFixed(2)} | Aluno APROVADO`)
}
