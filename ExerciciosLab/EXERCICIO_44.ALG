algoritmo "exercicio_44"
var

   contador, numero, incremento, valor_final: inteiro

inicio

      Escreval("DIGITE UM NÚMERO: ")
      Leia(numero)
      Escreval("Incremento(Salto): ")
      Leia(incremento)
      Escreval("Digite o valor final: ")
      Leia(valor_final)

      Enquanto (numero <= valor_final) faca
      Escreva(numero)
      numero <- numero + incremento
      fimenquanto
      Escreval("")
      Escreval("Acabou!")
      

fimalgoritmo