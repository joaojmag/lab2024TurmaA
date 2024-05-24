Algoritmo "Ex16"

//16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
//fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
//já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
//quantos dias de vida um fumante perderá e exiba o total em dias.

Var

   diasPerdidos, diasDecimal: Real
   dias, horas: Inteiro
   
   cigarrosDiarios,minutosDiariosPerdidos, minutosTotaisPerdidos: Inteiro
   anosFumando,anosEmDiasFumando: Inteiro
   
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

      minutosDiariosPerdidos <- (cigarrosDiarios * 10) //Minutos de Vida Diários Perdidos
      
      anosEmDiasFumando<- (anosFumando * 365) //Anos Fumando convertidos em Dias
      
      minutosTotaisPerdidos <- (anosEmDiasFumando * minutosDiariosPerdidos) //Minutos de vida total perdido
      
      diasPerdidos <- (minutosTotaisPerdidos/1440) //Convertendo os minutos fumando em dias

      dias <- Int(diasPerdidos) //Pegando o Inteiro do dia
      diasDecimal <- (diasPerdidos - Dias) //Pegando o decimal do dia
      horas <- int( diasDecimal * 24) //Convertendo o ddecimal de dia para horas


      Escreval("Você perdeu aproximadamente", dias, " Dias", horas," Horas de sua vida fumando, NÃO FUME!")

Fimalgoritmo