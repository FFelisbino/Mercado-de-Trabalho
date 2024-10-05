function converterNota(notaNumerica) {
    // Verificando se a nota está dentro do intervalo válido
    if (notaNumerica < 0 || notaNumerica > 100) {
      return "Nota inválida";
    }
  
  
    // Utilizando um if-else para definir o conceito com base na tabela
    if (notaNumerica >= 90) {
      return "A";
    } else if (notaNumerica >= 80) {
      return "B";
    } else if (notaNumerica >= 70) {
      return "C";
    } else if (notaNumerica >= 60) {
      return "D";
    } else {
      return "E";
    }
  }
  
  
  // Exemplo de uso:
  var notaAluno = 75;
  var conceito = converterNota(notaAluno);
  console.log("O conceito do aluno é:", conceito)
  