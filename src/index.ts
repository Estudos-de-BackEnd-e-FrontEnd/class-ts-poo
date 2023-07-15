import { Counter } from "./ex-1-counter"
import { Ball } from "./ex-2-ball"
import { Account } from "./ex-3-account"
import { Calculator } from "./ex-4-calc"
import { FuelPump } from "./ex-5.fuel"
import { Car } from "./ex-6.car"
//exercicio 1
const counter = new Counter()
counter.increase()
counter.increase()
counter.increase()
counter.increase()
counter.toZero()

console.log(counter.getValue())

//exercicio 2
const ball = new Ball()

console.log(ball.changeColor("amarelo"))
console.log(ball.showColor())


//exercicio 3
const account = new Account(123, "lucas", 5000)
console.log(account)

account.addCash(2000)
console.log(account)

account.removeCash(1000)
console.log(account)

account.changeName("maria")
console.log(account)


//exercicio 4

const calculator = new Calculator()
calculator.add(5,5)
calculator.subtract(5,5)

console.log(calculator.divide(5,1))
calculator.multiply(5,5)

console.log(calculator.showHistory)


//exercicio 5
const fuelPump = new FuelPump("Gasolina", 4.20, 1000)

console.log(fuelPump)
console.log(fuelPump.changeValue(5))
console.log(fuelPump.changeFuelType("Alcool"))

console.log(fuelPump.refuelByAmount(100))

console.log(fuelPump)

console.log(fuelPump.refuelByLiter(500))

console.log("bomba: ", fuelPump)

console.log(fuelPump.changeTotalFuel(100))

console.log("bomba: ", fuelPump)


//exercicio 6

const car = new Car()

car.addFuel(140)
console.log("car:",car.drive(1400))
console.log(car.fuelTankTotal())

console.log(car)