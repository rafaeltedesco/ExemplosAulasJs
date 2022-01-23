import calculadora from './Calculadora.js'



export function Exemplo01() {
    
  let operacao = 'soma'

  calculadora.executarOperacao(operacao, 10, 20)

  operacao = 'subtracao'

  calculadora.executarOperacao(operacao, 20, 5)

  operacao = 'multiplicacao'

  calculadora.executarOperacao(operacao, 10, 4)

  operacao = 'divisao'

  calculadora.executarOperacao(operacao, 10, 5)

}
