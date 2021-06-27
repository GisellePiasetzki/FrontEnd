function somar (n1,n2, callcack) {
    return n1+n2
}
function subtracao (n1,n2, callcack){
    return n1-n2
}
function multiplicação (n1,n2,callcack) {
    return n1*n2
}
function divisao (n1,n2, callcack) {
    return n1/n2
}

function calculadora (n1,n2, callcack) {
    return callcack (n1,n2);
}
console.log(calculadora(2,2, divisao));