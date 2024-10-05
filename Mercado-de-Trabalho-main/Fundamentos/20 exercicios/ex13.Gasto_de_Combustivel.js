var tempoViagem = parseInt(prompt("Digite o tempo gasto na viagem (em horas):"));
var velocidadeMedia = parseInt(prompt("Digite a velocidade média durante a viagem (em km/h):"));
var distanciaPercorrida = tempoViagem * velocidadeMedia;
var consumoCarro = 12;
var litrosGastos = distanciaPercorrida / consumoCarro;
console.log("Litros gastos: " + litrosGastos.toFixed(3));
