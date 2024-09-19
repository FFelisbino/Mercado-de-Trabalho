let contador = 0;
for (let i = 0; i < 10; i++) {
     if (i === 3) {
        continue; //Pular quando i for 3
     }
     if (i === 7) {
        break; // Para o loop quando i  for 7
     }
     contador++; // incrementa o contador
     console.log(`ì: ${i}, contador: ${contador}`);
}