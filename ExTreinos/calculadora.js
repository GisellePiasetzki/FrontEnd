let pessoa = {
    nome: "Silas",
    idade: 20,
    andar: function() {
        return 'Andando'
    } // metodo de objeto
}
//console.log(pessoa.andar())

let calculadora = {
    somar: function(n1,n2){
        return n1+n1
    },
    subtracao: function(n1,n2){
        return n1-n2
    },
    cor: 'Cinza',
    propriedades: function() {
        return 'A minha cor é ' + this.cor

    }
}
console.log(calculadora.propriedades())

//forma passada em aula:

let somar=function (n1,n2)
{    return n1+n2;}
let subtrair=function (n1,n2)
{    return n1-n2;}
let multiplicar=function (n1,n2)
{    return n1*n2;}
let dividir=function (n1,n2)
{   //olhar para o parâmetro n2 e verificar se n2 = 0
    if (n2==0) {
        //só executa se for true
        return 'Impossível fazer a divisão por 0!';
    }
    else {
        return n1/n2;
    }
}

//invocar as funções
//NÃO DIVIDIRÁS POR ZERO
console.log(dividir(10,2));