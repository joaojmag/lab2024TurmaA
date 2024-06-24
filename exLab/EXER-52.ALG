Algoritmo "Exer-52"

Var

 idade, contador, maiorLida: inteiro
 maiores, menorCinco: inteiro
 media,soma: real

Inicio
    contador <- 1
    EscrevaL ("Vamos ver a idade de algumas pessoas:")
   Enquanto (contador <= 10) faca
      escreva ("Qual ", contador,"° idade: ")
      leia (idade)
      contador <- contador + 1

      se (contador =1)  entao
         menorCinco <- idade
         maiores <- idade
         maiorLida <-idade
      fimSe

         se (idade>=18) entao
            maiores <- maiores +1
         fimSe

            se (idade<5) entao
               menorCinco <- idade
            fimse

               se (idade>maiorLida) entao
                  maiorLida <- idade
               fimSe

      soma <- soma + idade
   fimEnquanto
    media <- (soma/10)
    escreval ("A média da idade do grupo é: ",media)
    escreval (maiores, " pessoas são maiores de 18 anos.")
    escreval (menorCinco, " pessoas são menores de 5 anos.")
    escreval ("A maior idade lida foi: ",maiorLida)



Fimalgoritmo
