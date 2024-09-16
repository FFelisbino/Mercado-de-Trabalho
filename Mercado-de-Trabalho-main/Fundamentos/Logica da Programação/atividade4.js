var numero1 = parseInt(prompt("Informa o primeiro número"))
var numero2 = parseInt(prompt("Informa o segundo número"))
var numero3 = parseInt(prompt("Informa o terceiro número"))

if (numero1 > numero2 && numero1 > numero3){
    console.log("Mior número: "+numero1)
}
else if (numero2 > numero3){
    console.log(" Maior número: "+numero2)
}
else(
    console.log("Minha maior número:"+numero3)
)