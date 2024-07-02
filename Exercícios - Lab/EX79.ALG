Algoritmo "Ex79"

//79) Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
//No final, mostre quais são os números pares que foram digitados e em que
//posições eles estão armazenados.

var
   val: vetor[1..10] de Inteiro
   i : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _______________________" )
      EscrevaL ("|                       |")
      EscrevaL ("| Verificador de Nº Par |")
      EscrevaL ("|_______________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para i <- 1 ate 10 faca
           Escreva("Digite o", i, "º Valor: ")
           Leia(val[i])
      FimPara

      EscrevaL("")
      
      Para i <- 1 ate 10 faca

           Se ( val[i] % 2 = 0 ) entao
              EscrevaL(val[i], " É PAR e está na posição:", i)
           FimSe

      FimPara

      EscrevaL(" ")

fimalgoritmo