
class Comidas {
    constructor(id, nome, tempo){
        this.id = id;
        this.nome = nome;
        this.tempo= tempo;
    }
}

let comidas = [
    new Comidas(1, "Pipoca", 10),
    new Comidas(2, "Macarrao", 8),
    new Comidas(3, "Carnes", 15),
    new Comidas(4, "Feijao", 12),
    new Comidas(5, "Brigadeiro", 8),
    new Comidas(6, "Lasanha", 15) //testando com nova comida
]

class Microondas {
    constructor(comidas){
        this.comidas=comidas;
    }

    montaMenu () {
        for (let comida of this.comidas) {
            console.log(`${comida.id} - ${comida.nome} - ${comida.tempo} segundos`)
        }
    }

    comecarPreparo(opcao, tempo) {
       let comidaEncontrada = this.comidas.find(comida => comida.id === opcao)
       if (typeof tempo != "number" ){
        console.log("Digite um numero, isso é um microondas")
        return
        }
       if (!comidaEncontrada){
           console.log("Prato inexistente")
           return
       }
       if (tempo < comidaEncontrada.tempo){
           console.log("Tempo insuficiente")
           return
       }
       if (tempo >= comidaEncontrada.tempo*3){
           console.log("Kabumm")
           return
       }
       if (tempo >= comidaEncontrada.tempo*2){
           console.log("Sua comida queimou")
           return
       }
        console.log("Prato pronto, bom apetite")
    }
}

let microondas = new Microondas(comidas)
microondas.montaMenu()

microondas.comecarPreparo(2, 15)
microondas.comecarPreparo(78, 15)
microondas.comecarPreparo(78, "dffd")