export class Cliente {
    Nome;
    _CPF;
    RG;

    get cpf() {
        return this._CPF
    }

    constructor(nome,cpf, rg) {
        this.Nome = nome;
        this._CPF = cpf;
        this.RG = rg;
    }
}