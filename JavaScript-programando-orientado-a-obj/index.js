import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const client1 = new Cliente("Schai",11122233309,123456789);

const contaCorrenteCliente1 = new ContaCorrente(client1,1001);

contaCorrenteCliente1.depositar(150);
contaCorrenteCliente1.depositar(50);

let valorSacado = contaCorrenteCliente1.sacar(-100);

console.log(`O saldo atual da conta é: ${valorSacado}`);

console.log(contaCorrenteCliente1);

const client2 = new Cliente("Daniel",99922233309,987654321);

const contaCorrenteCliente2 = new ContaCorrente(client2,1002);

contaCorrenteCliente1.transferir(50,contaCorrenteCliente2);
console.log(contaCorrenteCliente2)

contaCorrenteCliente1.depositar(20);

console.log("O número de contas é:",ContaCorrente.numeroDeContas);