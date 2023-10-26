function esParOImpar(numero: number): string {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }
  
  const numero = 5;
  const Rtado = esParOImpar(numero);
  
  console.log(`El número ${numero} es ${Rtado}`);

//Mmg
