Algoritmo "Ex55"

//55) [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de
//agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
//tentativas para tentar acertar.

Var

   tentativas, jogada, escolhido: inteiro

inicio

      EscrevaL (" ________________________________________________" )
      EscrevaL ("|                                                |")
      EscrevaL ("| Acerte o número entre 1 e 10 escolhido pelo Pc |")
      EscrevaL ("|________________________________________________|")
      EscrevaL (" ")

      escolhido <- ( randi(10) + 1 )
      tentativas <- 4
      
      Enquanto ( tentativas > 0 ) faca
      
      Escreva("Tente um número de 1 a 10: ")
      Leia(jogada)
      
      Se ( escolhido = jogada ) entao

         EscrevaL("Parabéns! Você acertou! o número que escolhi é: ", escolhido)
         fimalgoritmo
         
      Senao
         tentativas <- tentativas - 1
         EscrevaL("Que pena! Você errou! Você tem mais", tentativas, " tentativa(s). " )
      FimSe
      
      FimEnquanto
      
      limpatela
      EscrevaL("Tentativas esgotadas!, o número que esolhi era: ", escolhido )

fimalgoritmo