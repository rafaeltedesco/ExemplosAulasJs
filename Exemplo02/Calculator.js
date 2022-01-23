
class Calculator {

  constructor() {
    this.operation = null
  }

  addOperation(Operation) {
    this.operation = new Operation()
  }

  execute(a, b) {
    this.operation?.execute(a, b)
  }

}

export default Calculator