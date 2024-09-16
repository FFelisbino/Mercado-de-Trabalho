
saldoDisponivel = 1000;
valorDoSaque = prompt("Informa o valor do saque: ")

if (valorDoSaque <= saldoDisponivel) {
    saldoDisponivel = saldoDisponivel - valorDoSaque
    document.write("Você está sacando R$ ", valorDoSaque,".")
} else {
    document.write("O valor solicitado é maior que o valor disponivel para saque!")
}

document.write("   Saldo disponivel: R$ ", saldoDisponivel)