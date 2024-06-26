algoritmo "Exer-56"

var
contador, valor, soma: inteiro
resposta: caractere
inicio
   contador <- 1
   soma <- 0
   resposta <- "s"
   escreval ("   VAMOS SOMAR ALGUNS NÚMEROS:   ")
   
   enquanto (resposta= "s") faca
      escreva ("Digite",contador,"° número: ")
      leia (valor)
         se (valor<>1111) entao
            soma <- soma+ valor
            escreval ("Deseja continuar?")
            escreval  ("[s/n]")
            leia (resposta)
               se (resposta = "s" ) ou  (resposta= "n") entao
            contador <- contador +1
                senao
                  escreval ("Resposta inválida")
               fimSe
           senao
            escreval ("ERRO! Você digitou o valor 1111.")
            escreval ("Digite outro valor.")
         fimSe
   fimEnquanto

      escreva ("A soma dos valores digitados é: ",soma)


fimalgoritmo
