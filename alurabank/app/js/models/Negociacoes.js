class Negociacoes {
    constructor() {
        this._negociacoes = []; // : Negociao[] = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
