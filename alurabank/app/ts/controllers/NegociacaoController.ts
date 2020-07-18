import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacoes, Negociacao } from "../models/index";
import { logarTempoDeExecucao, domInject } from "../helpers/decorators/index";

export class NegociacaoController {
  @domInject("#data")
  private _inputData: JQuery;

  @domInject("#quantidade")
  private _inputQuantidade: JQuery;

  @domInject("#valor")
  private _inputValor: JQuery;

  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView: NegociacoesView = new NegociacoesView(
    "#negociacoesView",
    true
  );
  private _mensagemView: MensagemView = new MensagemView("#mensagemView", true);

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  @logarTempoDeExecucao()
  adiciona(event: Event) {
    event.preventDefault();

    let data = new Date(this._inputData.val().replace(/-/g, ","));

    if (
      data.getDay() == DiaDaSemana.Domingo ||
      data.getDay() == DiaDaSemana.Sabado
    ) {
      this._mensagemView.update(
        "As negociações só podem ser agendadas para dias úteis"
      );
      return;
    }
    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);

    this._negociacoesView.update(this._negociacoes);

    this._mensagemView.update("Negociação adicionada com sucesso!");
  }
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}
