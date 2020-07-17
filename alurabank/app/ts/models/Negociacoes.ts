import { Negociacao } from "./Negociacao";

export class Negociacoes {
  private _negociacoes: Array<Negociacao> = []; // : Negociao[] = [];

  adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    return [].concat(this._negociacoes);
  }
}
