

class Calculadora {


  constructor() {
    this.condicoes = {
      soma: this._soma,
      subtracao: this._subtracao,
      multiplicacao: this._multiplicacao,
      divisao: this._divisao
    }
  }

  executarOperacao(operacao, a, b) {
    const metodoDeExecucao = this.condicoes[operacao]
    if (!metodoDeExecucao) {
      throw new Error('Operação Inválida!')
    }
    metodoDeExecucao(a, b)

  }

  _soma(a, b) {
    console.log(`Resultado da Soma de ${a} + ${b} = ${a + b}`)
  }

  _subtracao(a, b) {
    console.log(`Resultado da Subtração de ${a} - ${b} = ${a - b}`)
  }

  _multiplicacao(a, b) {
    console.log(`Resultado da Multiplicação de ${a} * ${b} = ${a * b}`)
  }

  _divisao(a, b) {
    console.log(`Resultado da Divisão de ${a} / ${b} = ${a / b}`)
  }

}

export default new Calculadora()