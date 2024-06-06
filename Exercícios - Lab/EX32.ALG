Algoritmo "Ex32"

//32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
//jogador vai tentar descobrir qual foi o valor sorteado.
Var

   tentativa, escolhido: inteiro

inicio

      EscrevaL (" ________________________________________________" )
      EscrevaL ("|                                                |")
      EscrevaL ("| Acerte o número entre 1 e 5 escolhido por mim! |")
      EscrevaL ("|________________________________________________|")
      EscrevaL (" ")
      
      escolhido <- ( randi(5) + 1 )
      
      Escreva("Tente um número de 1 a 5: ")
      Leia(tentativa)
      
      Se ( escolhido = tentativa ) entao
      
         EscrevaL("Parabéns! Você acertou! o número que escolhi é: ", escolhido)
      Senao
         EscrevaL("Que pena! Você errou! o número que escolhi foi: ", escolhido)
      FimSe
fimalgoritmo