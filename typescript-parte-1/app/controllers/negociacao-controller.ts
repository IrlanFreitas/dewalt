import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona(): void {
        console.log(this.criaNegociacao());
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const RegExp = /-/g;
        const date = new Date(this.inputData.value.replace(RegExp, ","));
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseInt(this.inputValor.value)
        
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}