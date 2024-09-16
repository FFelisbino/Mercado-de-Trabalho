var salario = parseFloat(prompt("Digite o seu salario"))
if (salario <= 500 ) {
    console.log("Salario com aumento de 15% ",salario*1.15)
    document.write("Salario com aumento de 15% R$: ",salario*1.15)
} 
else if (salario > 500 && salario <= 1000) {
    console.log("Salario com aumento de 12,5% ",salario*1.125)
    document.write("Salario com aumento de 12,5% R$: ",salario*1.125)
}   
else {
    console.log("Salario com aumento de 10% ",salario*1.10)
    document.write("Salario com aumento de 10% R$: ",salario*1.10)
}

