function Restaurante(nomeRestaurante, cardapioRestaurante){
    this.nomeRestaurante = nomeRestaurante;
    this.cardapioRestaurante = cardapioRestaurante;

    this.entrada = () => {
        console.log("Boas vindas, o " + this.nomeRestaurante + " apresenta como cardápio " + this.cardapioRestaurante)
    }
};
console.log(new Restaurante ("Restaurante da Giselle", ["pizza de strogonoff", " suco de laranja"]).entrada())


