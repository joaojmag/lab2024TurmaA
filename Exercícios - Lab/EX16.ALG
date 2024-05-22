Algoritmo "Ex16"

//16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
//fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
//já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
//quantos dias de vida um fumante perderá e exiba o total em dias.

Var

   AnosFumados, CigarrosDiarios, Diastotalfumados, DiasTotalMinutos, VidaPerdidaDiaria, TotalPerdido, DiaTotalPerdido : Real

Inicio

      Escreval("_______________________")
      Escreval(" ")
      Escreval("QUANTOS DIAS DE VIDA VOCÊ JÁ PERDEU PRA SEMPRE?")
      Escreval("_______________________")
      Escreval(" ")

      Escreval("Quantos cigarros você costuma fumar por dia?")
      Leia(CigarrosDiarios)
      Escreval("Já fumou por quantos anos?")
      Leia(AnosFumados)

      VidaPerdidaDiaria <- (CigarrosDiarios * 10) //Minutos de Vida Diários Perdidos
      
      Diastotalfumados<- (AnosFumados * 365) //Dias Totais Nestes Anos Fumando
      
      DiasTotalMinutos <- (Diastotalfumados * 1440) //Anos em dias fumados convertidos em minutos
      
      TotalPerdido <- (VidaPerdidaDiaria * DiasTotalMinutos) //Minutos de vida total perdido
      
      DiaTotalPerdido <- (TotalPerdido/1440)

      Escreval("Você perdeu aproximadamente ", DiaTotalPerdido:5:0, " Dias de vida fumando, NÃO FUME!")

Fimalgoritmo