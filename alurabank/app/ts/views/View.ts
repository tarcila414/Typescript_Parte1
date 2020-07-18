import { logarTempoDeExecucao } from "../helpers/decorators/index";

export abstract class View<T> {
  protected _elemento: JQuery;
  private _escapar: boolean;

  constructor(seletor: string, escapar: boolean = false) {
    this._elemento = $(seletor);
    this._escapar = escapar;
  }

  @logarTempoDeExecucao()
  update(model: T) {
    let templateV = this.template(model);

    if (this._escapar) {
      templateV = templateV.replace(/<script>[/s/S]*?<\/script>/g, "");
    }
    this._elemento.html(templateV);
  }

  abstract template(model: T): string;
}
