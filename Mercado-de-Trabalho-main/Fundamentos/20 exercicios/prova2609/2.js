var notaA = parseFloat(prompt("Digite a primeira nota de 0 á 10:"));
var notaB = parseFloat(prompt("Digite a segunda nota 0 á 10:"));
var notaC = parseFloat(prompt("Digite a segunda nota 0 á 10:"));

var media = (notaA + notaB + notaC) / (3);
if  (media >= 7) {
    alert("Aprovado!");
}    else {
    alert("Reprovado");
}   

//console.log("MEDIA =", media.toFixed(2));