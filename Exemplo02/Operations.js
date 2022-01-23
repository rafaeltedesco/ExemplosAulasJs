
class Divide {

  execute(a, b) {
    
    console.log(`Resultado da Divisão de ${a} e ${b} = ${a / b}`)
  }

}


class Mult {

  execute(a, b) {  
    console.log(`Resultado da Multiplicação de ${a} e ${b} = ${a * b}`)
  }

}


class Sub {

  execute(a, b) {
    
    console.log(`Resultado da Subtração de ${a} e ${b} = ${a - b}`)
  }

}



class Sum {

  execute(a, b) {
    
    console.log(`Resultado da Soma de ${a} e ${b} = ${a + b}`)
  }

}


export default {
  Sum,
  Sub,
  Mult,
  Divide
}