Algoritmo "Ex36"

//36) Um programa de vida saudável quer dar pontos atividades físicas que podem
//ser trocados por dinheiro. O sistema funciona assim:
//- Cada hora de atividade física no mês vale pontos
//- até 10h de atividade no mês: ganha 2 pontos por hora
//- de 10h até 20h de atividade no mês: ganha 5 pontos por hora -
//acima de 20h de atividade no mês: ganha 10 pontos por hora - A
//cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
//Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
//calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu
//ganhar.

Var

   points, horasAtv: Inteiro

inicio

      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("|  Motivação para Exercitar-se!    |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")

      Escreva(" Quantas horas de atividade física você teve este mês? ")
      Leia(horasAtv)
      EscrevaL("")

      Se (horasAtv <= 10 ) entao
         points <- ( 2 * horasAtv)
         EscrevaL("Parabéns! Devido ao seu esforço em exercitar-se, você será bonificado!")
         EscrevaL (" ")
         EscrevaL("Com um total de:", points, " Você receberá: R$", (points * 0.05),".")
      FimSe
      
      Se (horasAtv > 10 ) e (horasAtv < 21) entao
         points <- ( 5 * horasAtv)
         EscrevaL("Parabéns! Devido ao seu esforço em exercitar-se, você será bonificado!")
         EscrevaL (" ")
         EscrevaL("Com um total de:", points, " Você receberá: R$", (points * 0.05),".")
      FimSe
      
      Se (horasAtv > 20 ) entao
         points <- ( 10 * horasAtv)
         EscrevaL("Parabéns! Devido ao seu esforço em exercitar-se, você será boni8ficado!")
         EscrevaL (" ")
         EscrevaL("Com um total de:", points, " Você receberá: R$", (points * 0.05),".")
      FimSe


fimalgoritmo
