Algoritmo "10.3-GUANABARA"

//Aula #10.3 Guanabara "Fatorial com Repita"

var

   num, cont, fatorial : Inteiro

inicio

      EscrevaL (" _____________________" )
      EscrevaL ("|                     |")
      EscrevaL ("| Fatorial com Repita |")
      EscrevaL ("|_____________________|")
      EscrevaL (" ")

      Escreva(" Digite um número: ")
      Leia(num)
      
      cont <- num
      fatorial <- 1

      Repita
      
      fatorial <- fatorial * cont
      cont <- cont - 1
      
      Ate( cont < 1 )
      EscrevaL(" O fatorial de: ", num, " é", fatorial, ".")

fimalgoritmo
