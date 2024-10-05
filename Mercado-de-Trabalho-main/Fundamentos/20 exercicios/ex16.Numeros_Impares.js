var X = parseInt(prompt("Digite um número inteiro (entre 1 e 1000):"));

if (X >= 1 && X <= 1000) {

    for (var i = 1; i <= X; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
} else {
    console.log("Número inválido. Digite um número entre 1 e 1000.");
}
