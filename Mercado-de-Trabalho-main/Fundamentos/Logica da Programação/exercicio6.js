// Função Principal
function caixaDeMercado() {
    let totalGeral = 0;
    let numProdutos = parseInt(prompt("Quantos produtos você está comprando?"));
    let recibo = "";

    // Estrutura de repetição para capturar informações de cada produto
    for (let i = 0; i < numProdutos; i++) {
        let nomeProduto = prompt(`Nome do produto ${i + 1}:`);
        let quantidade = parseInt(prompt(`Quantidade de ${nomeProduto}:`));
        let valorUnitario = parseFloat(prompt(`Valor unitario de ${nomeProduto}:`));

        // Calcular p valor total do produto
        let ValorTotalProduto = quantidade * valorUnitario;
        totalGeral += ValorTotalProduto;

        // Adiciona as informações do Produto
        recibo += `${nomeProduto}: ${quantidade} x R$ ${valorUnitario.toFixed(2)} = R$ ${ValorTotalProduto.toFixed(2)}\n`;
    }

// Exibe o recibo e o total Geral
recibo += `\nTotal  geral: R$ ${totalGeral.toFixed(2)}`;
alert(recibo);
}

// Chmam a função
caixaDeMercado()