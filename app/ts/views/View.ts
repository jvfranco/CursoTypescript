//namespace Views {

    export abstract class View<T> {

        protected elemento: JQuery;

        constructor(seletor: string){
            this.elemento = $(seletor);
        }

        update(model: T): void {
            this.elemento.html(this.template(model));
        }

        abstract template(model: T): string;
        //throw new Error('Você deve implementar o método template!');

    }
//}