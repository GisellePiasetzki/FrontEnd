/*1) Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2).
Em seguida, execute a função testando diferentes valores. Lembrar que o imc peso (kg) / altura (m) 168 centímetros - transformar para metros--> /100  altura²  altura*altura, altura**2, Math.pow(altura,2)     */

function calcularIndiceDeMassaCorporal(altura, peso)
{
    let metros=altura/100;
    return ((peso/Math.pow(metros,2)).toFixed(1));
}

console.log(calcularIndiceDeMassaCorporal(168,70));
