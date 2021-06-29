// 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let numerosPares = [2, 4, 6, 8, 10];

let virarImpar = numerosPares.map(function(num){
    return num + 1
});
console.log(virarImpar);
console.log("----------------------------------------------------");
// 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ["Maria", "Giselle", "Vinicios", "Maria"];

let filtrarNomes = nomes.filter(function(nome){
   return nome === "Maria";
});

console.log(filtrarNomes);


console.log("----------------------------------------------------");
// 3 - Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
let numeros = [1,2,3,6,4,67,8,53]
let numerosFormatados = numeros.reduce(function(acumulador, elemento){
    return acumulador + "-" + elemento
})
console.log(numerosFormatados)
console.log("----------------------------------------------------");


//4 - Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
let animais = ["gato", "cachorro", "vaca", "boi", "coelhos"];

let nomeAnimais = animais.forEach(function(animal){
        console.log(`O animal é ${animal}`)
})