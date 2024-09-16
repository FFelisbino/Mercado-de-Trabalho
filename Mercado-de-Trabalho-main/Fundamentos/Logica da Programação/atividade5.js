var numero = parseInt(prompt("Digite um número"))
if (numero%2 == 0){
    console.log(numero+" Número Par")
    document.write(numero+" Número Par")

} else {
    console.log(numero+" Número Impar")
    document.write(numero+" Número Impar ")
}
// OPERAÇÃO TERNARIO

// Opção para rescrever o código em apenas poucas linhas
//var numero = parseInt(prompt("Digite um número"))
// var resultado = numero%2 == 0 ? "Par" : "Ímpar"
//console.log(resultado)

// ("?" - Equivale ao iF) e (":" ao else)