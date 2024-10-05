var distancia = parseFloat(prompt("Digite a distância percorrida em km:"));
var combustivel = parseFloat(prompt("Digite a quantidade de combustível gasta em litros:"));
var consumoMedio = distancia / combustivel;


console.log("O consumo médio do automóvel foi de " + consumoMedio.toFixed(3) + " km/l");
