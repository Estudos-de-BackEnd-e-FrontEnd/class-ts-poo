/* 2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor */

export class Ball{
    color: string
    circumference: string
    material: string

    constructor(){
        this.color = "vermelho"
        this.circumference = "2pi r"
        this.material = "plastico"
         
    }

    showColor(){
        return this.color
    }

    changeColor(newColor: string){
        this.color = newColor
    }

}


