Algoritmo "Ex76"

//76) Crie um programa que preencha automaticamente um vetor numérico com 7
//números gerados aleatoriamente pelo computador e depois mostre os valores
//gerados na tela.

Var
   array : vetor[0..6] de Inteiro
   cont : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________" )
      EscrevaL ("|                    |")
      EscrevaL ("| Preencher vetor 7  |")
      EscrevaL ("|____________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para cont <- 0 ate 6 faca

         Aleatorio 1 , 100
         Leia(array[cont])

      FimPara

fimalgoritmo