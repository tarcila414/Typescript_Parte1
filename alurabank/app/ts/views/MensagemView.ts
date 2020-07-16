namespace Views {
  export class MensagemView extends Views.View<string> {
    template(model: string) {
      return `<p class="alert alert-info"> ${model}</p>`;
    }
  }
}
