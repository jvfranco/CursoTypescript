System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_2.Negociacoes();
                    this.negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this.mensagemView = new index_1.MensagemView('#mensagemView');
                    this.inputData = $('#data');
                    this.inputQuantidade = $('#quantidade');
                    this.inputValor = $('#valor');
                    this.negociacoesView.update(this.negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    const negociacao = new index_2.Negociacao(new Date(this.inputData.val().replace(/-/g, ',')), parseInt(this.inputQuantidade.val()), parseFloat(this.inputValor.val()));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update('Negociação adicionada com sucesso!');
                    this.negociacoes.paraArray().forEach(negociacao => {
                        console.log(negociacao);
                    });
                }
                ;
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
