class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        if (categoria) {
            this.categoria = categoria;
        } else {
            this.categoria = "Indefinido";
        }
    }
}
