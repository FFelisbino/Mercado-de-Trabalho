var codigoPeca1 = parseInt(prompt("Digite o código da primeira peça:"));
var quantidadePeca1 = parseInt(prompt("Digite a quantidade da primeira peça:"));
var valorUnitarioPeca1 = parseFloat(prompt("Digite o valor unitário da primeira peça:"));

var codigoPeca2 = parseInt(prompt("Digite o código da segunda peça:"));
var quantidadePeca2 = parseInt(prompt("Digite a quantidade da segunda peça:"));
var valorUnitarioPeca2 = parseFloat(prompt("Digite o valor unitário da segunda peça:"));

var valorTotalPeca1 = quantidadePeca1 * valorUnitarioPeca1;
var valorTotalPeca2 = quantidadePeca2 * valorUnitarioPeca2;


var valorTotalCompra = valorTotalPeca1 + valorTotalPeca2;
console.log("VALOR A PAGAR: R$ " + valorTotalCompra.toFixed(2));
