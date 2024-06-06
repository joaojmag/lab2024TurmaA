algoritmo "exercicio_31"
var
   jogador1, jogador2: inteiro
   pedra, papel, tesoura: inteiro
inicio

      Escreval("JOKENPO")
      Escreval(" ")
      Escreval("[1] PEDRA")
      Escreval("[2] PAPEL")
      Escreval("[3] TESOURA")
      Escreval(" ")
      Escreva("PRIMEIRO JOGADOR SELECIONE UM ITEM: ")
      Leia(jogador1)
      Escreva("SEGUNDO JOGADOR SELECIONE UM ITEM: ")
      Leia(jogador2)
      Escreval("-------------------------")
      
      pedra <- 1
      papel <- 2
      tesoura <- 3

      se (jogador1 = pedra) e (jogador2 = papel) entao
      Escreval("JOGADOR 2 VENCEU")
      Escreval("PAPEL MATA A PEDRA")
      senao
      se (jogador1 = papel) e (jogador2 = tesoura) entao
      Escreval("JOGADOR 2 VENCEU")
      Escreval("TESOURA MATA O PAPEL")
      senao
      se (jogador1 = tesoura) e (jogador2 = pedra) entao
      Escreval("JOGADOR 2 VENCEU")
      Escreval("PEDRA MATA A TESOURA")
      senao
      se (jogador1 = pedra) e (jogador2 = tesoura) entao
      Escreval("JOGAODR 1 VENCEU")
      Escreval("PEDRA MATA A TESOURA")
      senao
      se (jogador1 = tesoura) e (jogador2 = papel) entao
      Escreval("JOGADOR 1 VENCEU")
      Escreval("TESOURA MATA O PAPEL")
      senao
      se (jogador1 = papel) e (jogador2 = pedra) entao
      Escreval("JOGADOR 1 VENCEU")
      Escreval("PAPEL MATA A PEDRA")
      fimse
      fimse
      fimse
      fimse
      fimse
      fimse
      
      Escreva("-------------------------")


fimalgoritmo