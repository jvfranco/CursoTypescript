export function domInject(seletor: string) {
 //Injeta elementos do DOM na classe, transformando os atributos em getters, e só buscará os elementos
 //caso ainda não tenham sido buscados no DOM.
    return function(target: any, key: string){
        let elemento: JQuery;
        const getter = function() {
            if(!elemento){
                console.log(`buscando ${seletor} para injetar em ${key}`);
                elemento = $(seletor);
            }
            return elemento;
        }

        Object.defineProperty(target, key, {
            get:getter
        });
    }
}

/* exemplo para criacao de constructor 
export function meuDecoratorDeClasse() {

    return function(constructor: any) {

       // guarda o constructor original, pois iremos definir um novo
        const original = constructor;

       // cria um novo constructor. Como ele pode receber nenhum ou mais parâmetros, usamos ...args: any[]
        const novo: any = function (...args: any[]) {
            console.log("Criando uma instância com New: " + original.name); 
            // cria a instância da classe quando for chamado 
            return new original(...args);
        }

       // importante! O prototype do novo constructor deve ser o mesmo do original
        novo.prototype = original.prototype;

        // retorna o novo constructor
        return novo;
    }
} */