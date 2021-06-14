/*Após isso, exiba no console os resultados das funções relacionadas aos arrays,
que são: Join, Pop, Push, Shift e Unshift.
Também se deve escrever com suas palavras, o que cada função realiza.
Seguem abaixo alguns exemplos.
console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN) */

let compras = ["arroz", "feijão", "legumes","macarrão"];
console.log(compras.join())
console.log("Assim, o método join transforma o array em uma string, retornando seus elementos, por padrão, separados por vírgula)");

let ultimoItem = compras.pop();
console.log(compras);
console.log(" O método pop retira do array o último elemento, no caso, macarrão");

compras.push("pipoca");
console.log(compras);
console.log("O método push adiciona ao final do array um elemento, no caso, pipoca");

compras.shift();
console.log(compras);
console.log("O método shift retira o primeiro elemento do array, no caso, arroz")

compras.unshift("sabonete", "shampoo")
console.log(compras)
console.log("O método unshift adiciona um ou mais elementos no início do array, no caso, sabonete e shampoo")