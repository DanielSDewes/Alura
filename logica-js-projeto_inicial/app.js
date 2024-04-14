alert('Boas vindas ao jogo do número secreto.');
let limiteNumero
limiteNumero = prompt('Defina o número limite para o número secreto.');
let numeroSecreto = parseInt(Math.random() * limiteNumero + 1);

console.log('O número secreto é: '+numeroSecreto);

let numeroChute;
let tentativas = 1;

while (numeroChute != numeroSecreto){
// se o chute for igual ao número secreto, mostra o log no console de que o usuário acertou.
    numeroChute = prompt(`Chute um número entre 0 e ${limiteNumero}:`);
    if (numeroChute == numeroSecreto){
        break;
    }
    else {

        if (numeroChute > numeroSecreto){
            alert(`O número secreto é menor que ${numeroChute}`);
        } else {
            alert(`O número secreto é maior que ${numeroChute}`);
        }
    }
    tentativas++;
}
console.log('O loop foi executado: '+tentativas+'x');
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou papai. Você descobriu que o número secreto era: ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`);
