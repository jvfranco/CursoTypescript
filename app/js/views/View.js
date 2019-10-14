class View {
    constructor(seletor) {
        this.elemento = $(seletor);
    }
    update(model) {
        this.elemento.html(this.template(model));
    }
}
