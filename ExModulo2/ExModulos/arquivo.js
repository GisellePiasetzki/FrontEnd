

function podeSubir(altura, acompanhada){
    if (altura > 1.40 && altura < 2){

        console.log("Acesso autorizado")
        return true

    } else if (altura <= 1.40 && altura >= 1.20 && acompanhada) {
        console.log("Acesso autorizado somente com acompanhante")
        return true

    } else if (altura < 1.20){
        console.log("Acesso negado")
        return false
    } else {
        console.log("Acesso negado")
        return false
    }
}

module.exports = podeSubir;

const S = require('string');
console.log(S('#').times(3).s)
console.log(S('yes_we_can').wrapHTML().s)

S('string to float').underscore()