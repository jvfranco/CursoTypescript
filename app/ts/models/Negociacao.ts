import { MeuObjeto } from './MeuObjeto'

export class Negociacao implements MeuObjeto<Negociacao> {
/*    
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //Já faz a declaração da variaveis dentro do construtor
    constructor(private _data: Date, private _quantidade: number,
        private _valor: number){}

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
*/
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){}

    get volume() {
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log(
            `Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Valume: ${this.volume}`
        );
    }

    ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate() &&
            this.data.getMonth() == negociacao.data.getMonth() &&
            this.data.getFullYear() == negociacao.data.getFullYear();
    }

}