System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../service/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_2.Negociacoes();
                    this.negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this.mensagemView = new index_1.MensagemView('#mensagemView');
                    this.negociacaoService = new index_4.NegociacaoService();
                    this.negociacoesView.update(this.negociacoes);
                }
                adicionar() {
                    let data = new Date(this.inputData.val().replace(/-/g, ','));
                    if (!this.ehDiaUtil(data)) {
                        this.mensagemView.update('Somente negociações em dias úteis, por favor!');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this.inputQuantidade.val()), parseFloat(this.inputValor.val()));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update('Negociação adicionada com sucesso!');
                }
                ;
                ehDiaUtil(data) {
                    return data.getDay() != DiaDaSemana.Sábado && data.getDay() != DiaDaSemana.Domingo;
                }
                importaDados() {
                    const isOk = (res) => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    };
                    this.negociacaoService.obterNegociacoes(isOk)
                        .then(negociacoes => {
                        negociacoes.forEach(negociacao => this.negociacoes.adiciona(negociacao));
                        this.negociacoesView.update(this.negociacoes);
                    });
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "inputQuantidade", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "inputValor", void 0);
            __decorate([
                index_3.throttle()
            ], NegociacaoController.prototype, "adicionar", null);
            __decorate([
                index_3.throttle()
            ], NegociacaoController.prototype, "importaDados", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["S\u00E1bado"] = 6] = "S\u00E1bado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
