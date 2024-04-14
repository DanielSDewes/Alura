const notas = [10, 8.3, 6];

notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`a média das notas é: ${media.toFixed(2)}`);