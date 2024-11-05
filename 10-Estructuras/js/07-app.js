

const efectivo = 300,
      credito = 1000,
      disponible = efectivo + credito,
      totalPagar = 600;

if ( efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Si podemos pagar')
} else {
    console.log('Fondos insuficientes');
}