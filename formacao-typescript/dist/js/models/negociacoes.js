export class Negociacoes {
    constructor() {
        // ! Duas formas de indicar que é array genérico
        this.negociacoes = [];
    }
    // private negociacoes: Array<Negociacao> = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ! Syntax Sugar para array somente de leitura
    lista() {
        // lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}
// new Negociacoes().lista();
