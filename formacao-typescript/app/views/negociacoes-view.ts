export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletorCss: string) {
    this.elemento = document.querySelector(seletorCss);
  }

  template(): string {
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

  update(): void {
    this.elemento.innerHTML = this.template();
  }
}
