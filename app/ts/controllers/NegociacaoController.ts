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

        const negociacao = new Negociacao(
            new Date(this.inputData.val().replace(/-/g, ',')),
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
}