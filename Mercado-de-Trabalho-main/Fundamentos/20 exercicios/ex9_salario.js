var numeroFuncionario = parseInt(prompt("Digite o número do funcionário:"));
var horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas:"));
var valorPorHora = parseFloat(prompt("Digite o valor por hora:"));
var salario = horasTrabalhadas * valorPorHora;
console.log("NUMBER =", numeroFuncionario);
console.log("SALARY = U$", salario.toFixed(2));