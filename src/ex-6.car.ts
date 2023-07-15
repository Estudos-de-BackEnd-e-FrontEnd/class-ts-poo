/* 6. Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.

d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque. */

export class Car{
    fuelEfficiencyKmLt: number
    fuelTank: number

    constructor(){
        this.fuelEfficiencyKmLt = 10
        this.fuelTank = 0
    }

    drive(distance: number): string | undefined{
        const fuelOut = distance / this.fuelEfficiencyKmLt


        if(this.fuelTank < fuelOut){
            return "Combustivel não vai dar pra chegar no destino, reabasteça."
        }

        this.fuelTank = Number((this.fuelTank - fuelOut).toFixed(2))

        if(this.fuelTank === 0){
            
            return "Status: Reabasteça o tanque"
         
        } 
        
    }

    addFuel(qtd: number){
        this.fuelTank += Number(qtd.toFixed(2))
    }

    fuelTankTotal(){
        return `Nível de combustível: ${this.fuelTank} litros`
    }
}