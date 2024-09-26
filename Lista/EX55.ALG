Algoritmo "Ex55"

Var

   tentativas, jogada, escolhido: inteiro

inicio

      EscrevaL ("ACERTE O NÚMERO ENTRE 1 A 10")
      EscrevaL ("")

      escolhido <- ( randi(10) + 1 )
      tentativas <- 4

      Enquanto ( tentativas > 0 ) faca

      Escreva("TENTE UM NÚMERO DE 1 A 10: ")
      Leia(jogada)

      Se ( escolhido = jogada ) entao

         EscrevaL("PARÁBENS! VOCÊ ACERTOU! O NÚMERO QUE ESCOLHI É: ", escolhido)
         fimalgoritmo

      Senao
         tentativas <- tentativas - 1
         EscrevaL("QUE PENA! VOCÊ ERROU! VOCÊ TEM MAIS", tentativas, " TENTATIVA(S). " )
      FimSe

      FimEnquanto

      limpatela
      EscrevaL("TENTATIVAS ESGOTADAS! O NÚMERO QUE ESCOLHI ERA: ", escolhido )

fimalgoritmo
fimalgoritmo