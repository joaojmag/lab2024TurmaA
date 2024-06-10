Algoritmo "10.1-GUANABARA"

//Aula #10.1 Guanabara "Tabuada com Repita"

var

   contador, num, resp : Inteiro

inicio

      EscrevaL (" ________________________" )
      EscrevaL ("|                        |")
      EscrevaL ("|   Tabuada com Repita   |")
      EscrevaL ("|________________________|")
      EscrevaL (" ")

      Contador <- 1
      Escreva(" Qual tabuada deseja? ")
      Leia(num)
      
      Repita
      
         resp <- num * contador

         EscrevaL(num, " x ", contador, " = ", resp)
         contador <- contador + 1

      Ate( contador > 10 )

fimalgoritmo
