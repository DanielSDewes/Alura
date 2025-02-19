/* 
console.log("Trabalhando com atribuição de variáveis");

const idade = 20;
const nome = "Daniel";
const sobrenome = "Dewes";

console.log(nome, sobrenome);

console.log(`Meu nome é ${nome}`);

const nomeCompleto = nome + " " + sobrenome;

console.log(`Meu nome é ${nomeCompleto}`);

*/

/*
console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array (
    `Gramado`,
    `POA`,
    `SA`
)

listaDeDestinos.push(`Sampa`);
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1],listaDeDestinos[0]);
*/


/*
console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Gramado`,
    `POA`,
    `SA`
)

//listaDeDestinos.push(`Sampa`);
console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

const idadeComprador = 19;
const Acompanhado = false;

&& = and
|| = or

if (idadeComprador < 18 && Acompanhado) {
    console.log("Comprador acompanhado");
} else {
    console.log("Comprador menor de idade");
    listaDeDestinos.splice(1, 1);
}

console.log("Embarque:  \n\n");

if (passagemComprada || idadeComprador > 18) {
    console.log("Boa viagem");
} else {
    console.log("Não pode embarcar");
}

console.log(listaDeDestinos);
*/



console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Gramado`,
    `POA`,
    `SA`
)

//listaDeDestinos.push(`Sampa`);
console.log("\n Destinos possíveis: ");
console.log(listaDeDestinos);

const idadeComprador = 19;
const Acompanhado = false;
let passagemComprada = false;
const destino = "POA";

const podeComprar = (idadeComprador >= 18 || Acompanhado) == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log(listaDeDestinos[contador]);
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Desitno existe? ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Não é possível embarcar.");
}

for (let cont = 0; cont < 3; cont ++) {
    if (listaDeDestinos[cont] == destino) {
        console.log(listaDeDestinos[cont]);
        destinoExiste = true;
    }
}