import { MensagemView, NegociacoesView } from '../views/index';
import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService, HandlerFunction } from '../service/index';

export class NegociacaoController {

    @domInject('#data')
    private inputData: JQuery;
    
    @domInject('#quantidade')
    private inputQuantidade: JQuery;
    
    @domInject('#valor')
    private inputValor: JQuery;

    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new /*Views.*/NegociacoesView('#negociacoesView');
    private mensagemView = new /*Views.*/MensagemView('#mensagemView');

    private negociacaoService = new NegociacaoService();

    constructor(){
        //this.inputData = $('#data');
        //this.inputQuantidade = $('#quantidade');
        //this.inputValor = $('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    @throttle()
    adicionar(): void {        

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

        //this.negociacoes.paraArray().forEach(negociacao => {
        //    console.log(negociacao);
        //});

    };

    private ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sábado && data.getDay() != DiaDaSemana.Domingo;
    }
    
    @throttle()
    importaDados() {
        /* function isOk(res: Response){
            if(res.ok){
                return res;
            } else {
                throw new Error(res.statusText);
            }
        } */

        const isOk: HandlerFunction = (res: Response) => {
            if(res.ok){
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

         this.negociacaoService.obterNegociacoes(isOk)
            .then(negociacoes => { 
                    negociacoes.forEach(negociacao =>
                        this.negociacoes.adiciona(negociacao));
                    this.negociacoesView.update(this.negociacoes);
                });   

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