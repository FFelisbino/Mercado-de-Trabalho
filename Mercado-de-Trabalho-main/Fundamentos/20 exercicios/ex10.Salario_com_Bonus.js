var nomeVendedor = prompt("Digite o nome do vendedor:");
var salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"));
var totalVendas = parseFloat(prompt("Digite o total de vendas do vendedor:"));
var comissao = totalVendas * 0.15;
var salarioTotal = salarioFixo + comissao;


console.log("TOTAL = R$", salarioTotal.toFixed(2));

