import {Cliente} from "./Cliente.js"

export class ContaCorrente {
    static numeroDeContas = 0;
    Agencia;
    _Cliente;
    _Saldo = 0;

    set Cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._Cliente = novoValor;
        }
    }

    get Cliente(){
        return this._Cliente;
    }

    get saldo(){
        return this._Saldo;
    }


    constructor(cliente,agencia){
        this._Cliente = cliente;
        this.Agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }


    sacar(valorSaque) {
        if ((this._Saldo >= (valorSaque*(-1))) && valorSaque < 0) {
            this._Saldo += valorSaque;
            return this._Saldo;
        } else {
            console.log(`Valor informado para saque era positivo, ou superior ao saldo da conta. Valor informado: ${valorSaque}`);
        }
    }

    depositar(valorDeposito) {
        if (valorDeposito < 0) {
            return;
        }
        this._Saldo += valorDeposito;
        console.log(`O novo saldo da conta é ${this._Saldo}`);
    }

    transferir(valorTransferencia, contaDestino){
        valorTransferencia = valorTransferencia*(-1);
        const valorSacado = this.sacar(valorTransferencia);
        contaDestino.depositar(valorTransferencia);

    }
}