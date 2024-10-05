function calcularTempo(distancia) {
    
    var tempoEmMinutos = distancia * 2;
    return tempoEmMinutos;
  }
  
  
  var distancia = 10;
  var tempo = calcularTempo(distancia);
  
  console.log(tempo + " minutos");
  