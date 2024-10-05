var notaA = parseFloat(prompt("Digite a primeira nota (A):"));
var notaB = parseFloat(prompt("Digite a segunda nota (B):"));
var pesoA = 3.5;
var pesoB = 7.5;


var media = (notaA * pesoA + notaB * pesoB) / (pesoA + pesoB);
console.log("MEDIA =", media.toFixed(5));
