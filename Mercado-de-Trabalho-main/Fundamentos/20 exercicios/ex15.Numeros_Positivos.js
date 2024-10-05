var contadorPositivos = 0;

for (var i = 0; i < 6; i++) {
  var valor = parseFloat(prompt("Digite um número:"));

  if (valor > 0) {
    contadorPositivos++;
  }
}

console.log("Quantidade de valores positivos:", contadorPositivos);
