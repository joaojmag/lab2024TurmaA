Algoritmo "Ex16"

//16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
//fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
//já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
//quantos dias de vida um fumante perderá e exiba o total em dias.

Var

   DiasPerdidos: Real
   
   CigarrosDiarios, MinutosDiariosPerdidos, MinutosTotaisPerdidos: Inteiro
   AnosFumando, AnosEmDiasFumando: Inteiro
   
   // 1 Ano = 365 Dias
   // 1 Dia = 1440 Minutos
   
Inicio

      Escreval("_______________________")
      Escreval(" ")
      Escreval("QUANTOS DIAS DE VIDA VOCÊ JÁ PERDEU PRA SEMPRE?")
      Escreval("_______________________")
      Escreval(" ")

      Escreval("Quantos cigarros você costuma fumar por dia?")
      Leia(CigarrosDiarios)
      Escreval("Já fumou por quantos anos?")
      Leia(AnosFumando)

      MinutosDiariosPerdidos <- (CigarrosDiarios * 10) //Minutos de Vida Diários Perdidos
      
      AnosEmDiasFumando<- (AnosFumando * 365) //Anos Fumando convertidos em Dias
      
      MinutosTotaisPerdidos <- (AnosEmDiasFumando * MinutosDiariosPerdidos) //Minutos de vida total perdido
      
      DiasPerdidos <- (MinutosTotaisPerdidos/1440) //Convertendo os minutos fumando em dias

      Escreval("Você perdeu aproximadamente", DiasPerdidos:4:0, " Dias de sua vida fumando, NÃO FUME!")

Fimalgoritmo