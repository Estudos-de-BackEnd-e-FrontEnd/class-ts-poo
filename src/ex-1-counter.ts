/* 1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador. */

export class Counter{
    counter: number

    constructor(){
        this.counter = 0
    }

    increase(){
        this.counter++
       
    }

    toZero(){
        this.counter = 0
        
    }

    getValue(){
        return this.counter
    }

}
