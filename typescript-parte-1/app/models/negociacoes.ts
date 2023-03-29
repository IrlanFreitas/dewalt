import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    // ! Duas formas de indicar que é array genérico
    private negociacoes: Negociacao[] = [];
    // private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // ! Syntax Sugar para array somente de leitura
    lista(): readonly Negociacao[] {
    // lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}

// new Negociacoes().lista();