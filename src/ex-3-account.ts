/* 3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque */


export class Account{
    accountNumber: number
    accountName: string
    accountBalance: number

    constructor(accountNumber: number, accountName: string, accountBalance: number){
        this.accountNumber = accountNumber
        this.accountName = accountName
        this.accountBalance = accountBalance
    }

    changeName(newName: string){
        this.accountName = newName
    }

    addCash(value: number){
        if(value > 0){
            this.accountBalance += value
        }
    }

    removeCash(value: number){
        if(this.accountBalance < value){
            return
        }

        this.accountBalance -= value
    }
}

