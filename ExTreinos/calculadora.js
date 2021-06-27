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
