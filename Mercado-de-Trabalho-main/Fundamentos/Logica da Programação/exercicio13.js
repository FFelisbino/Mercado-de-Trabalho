var carro = prompt("Digite o modelo do carro para compra!");
switch (carro) {
    case "hatch":
        console.log("Compra efetuada com Sucesso!");
        alert("Compra efetuada com Sucesso! \n"+carro);
        break;
    case "sedans":
    case "motocicletas":
    case "caminonetes":
        console.log("Tem certeza que não prefere este modelo");
        alert("Tem certeza que não prefere este modelo");
        break;
    default:
        console.log("Não Trabalhamos com este tipo de automóvel aqui!")
        alert("Não Trabalhamos com este tipo de automóvel aqui!")

}