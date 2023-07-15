/* 5 Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro

iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba. */

export class FuelPump{
    fuelType: string
    pricePerLiter: number
    qtdFuel: number
    fuelOut: number
    totalValue: number

    constructor(fuelType: string, pricePerLiter: number, qtdFuel: number){
        this.fuelType = fuelType
        this.pricePerLiter = pricePerLiter
        this.qtdFuel = qtdFuel
        this.fuelOut = 0
        this.totalValue = 0
    }

    refuelByAmount(value: number):string{
        this.fuelOut = Number((value / this.pricePerLiter).toFixed(2))


        if(this.qtdFuel < this.fuelOut){
            return "Reabasteça a bomba"
        }

        this.qtdFuel -= Number(this.fuelOut.toFixed(2))

        return `Foi abastecido: ${this.fuelOut.toFixed(2)} litros de combustivel`
    }

    refuelByLiter(qtd: number): string{
        this.fuelOut = qtd

        if(this.qtdFuel < this.fuelOut){
            return "Reabasteça a bomba"
        }

        this.qtdFuel -= Number(this.fuelOut.toFixed(2))
        this.totalValue = qtd *  this.pricePerLiter

        return `Valor total do abastecimento é: R$ ${this.totalValue}`
    }

    changeValue(value: number):void{
        this.pricePerLiter = value

    }

    changeFuelType(type: string):void{
        this.fuelType = type
    }

    changeTotalFuel(value: number):void{
        this.qtdFuel += value
    }

} 