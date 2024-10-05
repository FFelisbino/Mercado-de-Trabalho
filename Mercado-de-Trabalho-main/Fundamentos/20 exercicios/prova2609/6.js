var velEstrada = parseInt(prompt("Digite a velocidade da estrada: "));
var velCondutor = parseInt(prompt("Digite a velocidade do Condutor: "));
if (velCondutor<=velEstrada) {
    console.log("Sem Multa");
} 
else if  (velCondutor<=(velEstrada + (velEstrada*0.20))) {
    console.log("Multa leve");
} 
else  
    console.log("Multa Grave");
