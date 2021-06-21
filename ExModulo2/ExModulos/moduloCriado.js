function Restaurante(nomeRestaurante, cardapioRestaurante){
    this.nomeRestaurante = nomeRestaurante;
    this.cardapioRestaurante = cardapioRestaurante;

    this.entrada = () => {
        console.log("Boas vindas, o " + this.nomeRestaurante + " apresenta como cardápio " + this.cardapioRestaurante)
    }
};

module.exports = Restaurante;