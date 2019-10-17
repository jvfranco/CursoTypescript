//namespace Views {

    export abstract class View<T> {

        protected elemento: JQuery;
        private escapar: boolean;
        //escapar é opcional, caso nao seja passado por parametro, valor padrão sera false
        constructor(seletor: string, escapar: boolean = false){ //escapar?: boolean indica o paramentro é opcional, devem ser os últimos parametros do construtor
            this.elemento = $(seletor);
            this.escapar = escapar;
        }

        update(model: T): void {
            let template = this.template(model);
            if(this.escapar){
                template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                this.elemento.html(template);
            }
            this.elemento.html(this.template(model));
        }

        abstract template(model: T): string;
        //throw new Error('Você deve implementar o método template!');

    }
//}