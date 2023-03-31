export class Negociacao {

    constructor(
        // private _data: Date,
        // private _quantidade: number, 
        // private _valor: number
        // ! Forma defensiva que atribuir os dados e não conseguir modifica-los depois
        private _data: Date,
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

        
    get data(): Date {
        // * Devolver uma nova referência para que não seja alterada
        return new Date(this._data.getTime());
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    // get data(): Date { 
    //     return this._data;
    // }

    // get quantidade(): number {
    //     return this._quantidade;
    // }

    // get valor(): number {
    //     return this._valor;
    // }


}