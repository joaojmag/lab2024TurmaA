Algoritmo "10.5-GUANABARA"

//Aula #10.5 Guanabara PLUS "Super Contador"

var

   cont, num, continue : Inteiro

inicio

      Enquanto (continue <> 3 ) Faca

         EscrevaL (" ____________________" )
         EscrevaL ("|                    |")
         EscrevaL ("|   Super Contador   |")
         EscrevaL ("|____________________|")
         EscrevaL (" ")

         EscrevaL (" _______________" )
         EscrevaL ("|               |")
         EscrevaL ("| [1] De 1 a 10 |")
         EscrevaL ("| [2] De 10 a 1 |")
         EscrevaL ("| [3] SAIR      |")
         EscrevaL ("|_______________|")
         EscrevaL (" ")

         Leia(num)

         Escolha num

                 caso 1
                      Para cont <- 1 ate 10 faca
                           Escreva(cont, "..")
                      FimPara
                      EscrevaL()
                 caso 2
                      Para cont <- 10 ate 1 passo -1 faca
                           Escreva(cont, "..")
                      FimPara
                      EscrevaL()
                 caso 3
                      Fimalgoritmo
                 outrocaso
                          EscrevaL("Número Inválido! Fim do Programa!!")
                          continue <- 3

         FimEscolha
      
      FimEnquanto
      
fimalgoritmo
