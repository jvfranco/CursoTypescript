import { MensagemView, NegociacoesView } from '../views/index';
import { Negociacao, Negociacoes } from '../models/index';

export class NegociacaoController {

    private inputData: JQuery;
    private inputQuantidade: JQuery;
    private inputValor: JQuery;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new /*Views.*/NegociacoesView('#negociacoesView');
    private mensagemView = new /*Views.*/MensagemView('#mensagemView');

    constructor(){
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adicionar(event: Event): void {

        event.preventDefault();

        let data = new Date(this.inputData.val().replace(/-/g, ','));

        if (!this.ehDiaUtil(data)){
            this.mensagemView.update('Somente negociações em dias úteis, por favor!');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this.inputQuantidade.val()),
            parseFloat(this.inputValor.val())
        );

        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');

        //this.negociacoes.paraArray().length = 0;

        this.negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao);
        });
    };

    private ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sábado && data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado
}