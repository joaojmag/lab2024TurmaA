Algoritmo "GUANABARA_10.5"

var

   cont, num, continue : Inteiro

inicio

      Enquanto (continue <> 3 ) Faca

         Escreval("----------------")
         EscrevaL("SUPER CONTADOR")

         EscrevaL ("-----------------")
         EscrevaL ("[1] De 1 a 10 ")
         EscrevaL ("[2] De 10 a 1 ")
         EscrevaL ("[3] SAIR      ")
         EscrevaL ("-----------------")
         EscrevaL ("")

         Leia(num)
         limpatela

         Escolha num

                 caso 1
                      Para cont <- 1 ate 10 faca
                           Escreva(cont, ">>")
                      FimPara
                      EscrevaL("")
                 caso 2
                      Para cont <- 10 ate 1 passo -1 faca
                           Escreva(cont, ">>")
                      FimPara
                      EscrevaL("")
                 caso 3
                      fimalgoritmo
                 outrocaso
                          EscrevaL("NÚMERO INVALIDO! FIM DO PROGRAMA!")
                          continue <- 3

         FimEscolha

      FimEnquanto

fimalgoritmo