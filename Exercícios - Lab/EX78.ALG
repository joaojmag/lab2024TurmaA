Algoritmo "Ex78"

//78) Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
//mostre o vetor inteiro na tela e em seguida mostre em que posições foram
//digitados valores que são múltiplos de 10.

var
   val: vetor[1..15] de Inteiro
   i : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _______________________" )
      EscrevaL ("|                       |")
      EscrevaL ("| Multiplo 10 com Vetor |")
      EscrevaL ("|_______________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para i <- 1 ate 15 faca
           Escreva("Digite o", i, "º Valor: ")
           Leia(val[i])
      FimPara

      EscrevaL("")

      Para i <- 1 ate 15 faca

           Se ( val[i] % 10 = 0 ) entao
              EscrevaL("Múltiplo de 10 na posição:", i)
           FimSe

      FimPara

      EscrevaL(" ")
      
fimalgoritmo