class Endereco {
    constructor(rua, numero) {
        this.rua = rua;
        this.numero = numero;
    }
}

class Pessoa {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Endereço: ${this.endereco.rua}, ${this.endereco.numero}`);
    }
}

// Criando um endereço
const endereco1 = new Endereco("Rua das Flores", 123);

// Criando uma pessoa e associando o endereço
const pessoa1 = new Pessoa("João Silva", endereco1);

// Exibindo as informações da pessoa
pessoa1.exibirInformacoes();
