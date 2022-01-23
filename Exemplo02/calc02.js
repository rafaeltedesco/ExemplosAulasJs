
import Calculator from './Calculator.js'
import Operations from './Operations.js'


export function Exemplo02() {
  const calculator01 = new Calculator()
  calculator01.addOperation(Operations.Sum)
  calculator01.execute(10, 20)
  calculator01.addOperation(Operations.Sub)
  calculator01.execute(20, 30)
  calculator01.addOperation(Operations.Mult)
  calculator01.execute(5, 10)
  calculator01.addOperation(Operations.Divide)
  calculator01.execute(10, 2)
}