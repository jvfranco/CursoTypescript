 import { Negociacao } from './Negociacao';
 
 export class Negociacoes {

    //private negociacoes: Array<Negociacao> = []; ou
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        //retorna um cópia do array original para que não possa ser modificado
        return [].concat(this.negociacoes);
    }

}