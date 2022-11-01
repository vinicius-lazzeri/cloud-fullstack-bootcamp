//2. Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número PAR encontrado.

 const numbers = [10, 3, 7, 4, 2, 6, 14, 13, 22, 11, 1, 18]

 for(let i = 0; i < numbers.length; i++){
    let number = numbers[i]
    if (number % 2 == 0){
        console.log(number)
    }
 }
