algoritmo "exercicio_12"
var
   produto, promocional: Real
inicio
      Escreva("Qual o preço do produto?: ")
      Leia(produto)
      promocional <- produto*(5/100)
      Escreva("Seu preço promocional é", produto-promocional)
fimalgoritmo