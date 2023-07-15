/* 4. Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico. */

export class Calculator{
    history: string[]

    constructor(){
        this.history = []
    }

    add(number1: number, number2: number){
        this.history.push(`${number1} + ${number2} = ${number1 + number2}`)
    }

    multiply(number1: number, number2: number){
        this.history.push(`${number1} * ${number2} = ${number1 * number2}`)
    }

    divide(number1: number, number2: number){
        if(number2 === 0){
            return "não se divide por 0"
        }
        this.history.push(`${number1} / ${number2} = ${number1 / number2}`)
    }

    subtract(number1: number, number2: number){
        this.history.push(`${number1} - ${number2} = ${number1 - number2}`)
    }

    get showHistory(){

        return this.history
    }
}