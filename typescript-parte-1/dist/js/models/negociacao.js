export class Negociacao {
    constructor(
    // private _data: Date,
    // private _quantidade: number, 
    // private _valor: number
    // ! Forma defensiva que atribuir os dados e não conseguir modifica-los depois
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // * Devolver uma nova referência para que não seja alterada
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
