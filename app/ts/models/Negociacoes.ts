import { Negociacao } from './Negociacao';
import { MeuObjeto } from './MeuObjeto';
 
export class Negociacoes implements MeuObjeto<Negociacoes> {

    //private negociacoes: Array<Negociacao> = []; ou
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        //retorna um cópia do array original para que não possa ser modificado
        //como o array nao havia sido tipado, poderia ser passado qlqr valor para ele, como valor null ou undefined, por utilizar as Negociacao[], indicando explicitamente seu tipo
        return ([] as Negociacao[]).concat(this.negociacoes);
    }

    paraTexto(): void {
        console.log(JSON.stringify(this.negociacoes));
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}