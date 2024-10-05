var notaA = parseFloat(prompt("Digite a primeira nota (A):"));
var notaB = parseFloat(prompt("Digite a segunda nota (B):"));
var notaC = parseFloat(prompt("Digite a terceira nota (C):"));
var pesoA = 2;
var pesoB = 3;
var pesoC = 5;
var media = (notaA * pesoA + notaB * pesoB + notaC * pesoC) / (pesoA + pesoB + pesoC);
console.log("MEDIA =", media.toFixed(1));
