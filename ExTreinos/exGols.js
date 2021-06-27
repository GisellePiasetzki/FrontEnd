nomeJogador = "Giselle";
golsJogador = 0;
precoEmDolares = 0;


function fazerGol () {
    golsJogador += 1
    console.log("Gol!!")
    precoEmDolares += 10000
}
    fazerGol()
    fazerGol()
    fazerGol()

function hatTrick () {
    fazerGol()
    fazerGol()
    fazerGol()
    precoEmDolares += precoEmDolares * 0.1
}

console.log(`O jogador ${nomeJogador} vale ${precoEmDolares}`)