export class NegociacoesView {
    constructor(seletorCss) {
        this.elemento = document.querySelector(seletorCss);
    }
    template() {
        return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
