Algoritmo "Ex54"

//54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
//no final:
//a) Qual foi a média de altura do grupo
//b) Quantas pessoas pesam mais de 90Kg
//c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
//d) Quantas pessoas que medem mais de 1.90m pesam mais de
//100Kg.tre na tela

var
   contador: Inteiro
   altura, peso, media, mais90kg, menos50kg, mais100kg : Real

inicio

      EscrevaL (" _________________________________________" )
      EscrevaL ("|                                         |")
      EscrevaL ("|   Leia a Altura e o Peso de 7 Pessoas   |")
      EscrevaL ("|_________________________________________|")
      EscrevaL (" ")

      contador <- 1

      Enquanto (contador <= 7 ) faca

         Escreva(" Insira a Altura da", contador, "º Pessoa: ")
         Leia(altura)
         Escreva(" ")
         Escreva(" Insira o Peso da", contador, "º Pessoa: ")
         Leia(peso)

         contador <- contador + 1

         Se ( peso > 90 ) entao
             mais90kg <- mais90kg + 1
             media <- media + altura
             
              Se (peso > 100 ) e ( altura > 1.90 ) entao
                       mais100kg <- mais100kg + 1
                       media <- media + altura

              FimSe

         Senao
              Se ( peso < 50 ) e ( altura < 1.60) entao
                  menos50kg <- menos50kg + 1
                  media <- media + altura

              FimSe
         FimSe

      FimEnquanto
      
      media <- ( media / 7 )

      EscrevaL("")
      EscrevaL(media:3:2, " É a média da altura de todas as pessoas. " )
      EscrevaL(mais90kg, " Pessoas pesam mais de 90Kg. " )
      EscrevaL(menos50kg, " Pessoas pesam menos de 50Kg e tem menos de 1,60m. " )
      EscrevaL(mais100kg, " Pessoas pesam mais de 100Kg e tem mais de 1,90m. " )

fimalgoritmo