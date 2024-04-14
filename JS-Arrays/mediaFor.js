const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let somaNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}

console.log(`A soma das notas é: ${somaNotas}`);

const mediaNotas = somaNotas / notas.length;

console.log(`A média das notas é: ${mediaNotas.toFixed(2)}`);