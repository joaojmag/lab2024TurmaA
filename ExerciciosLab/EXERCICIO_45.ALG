algoritmo "exercicio_45"
var

   contador, numero, incremento, valor_final: inteiro
   validar: caractere

inicio

      Enquanto (validar <> "valido") faca

      Escreva("Digite um número: ")
      Leia(numero)
      Escreva("Digite o valor final: ")
      Leia(valor_final)
      
      se (valor_final > numero) entao
      Escreva("Incremento(Salto): ")
      Leia(incremento)
      Escreval("")

      Enquanto (numero <= valor_final) faca
      Escreval(numero)
      numero <- numero + incremento
      fimenquanto

      Escreval("")
      Escreval("Acabou!")
      
      validar <- "valido"
      
      senao
           Escreval("")
           EscrevaL("Valor Invalido.")
           Escreval("O numero incial deve ser menor que o valor final.")
           Escreval("")
      fimse
      fimenquanto

fimalgoritmo