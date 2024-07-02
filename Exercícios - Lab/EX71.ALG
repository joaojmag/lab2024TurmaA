Algoritmo "Ex71"

//71) Faça um programa que preencha automaticamente um vetor numérico com 8
//posições, conforme abaixo:
// |999|999|999|999|999|999|999|999

Var
   array : vetor[1..8] de Inteiro
   cont : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" __________________________" )
      EscrevaL ("|                          |")
      EscrevaL ("| 8 POSIÇÕES DO VETOR 999  |")
      EscrevaL ("|__________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()
      
      Para cont <- 1 ate 8 faca
      
           array[cont] <- 999
           Escreva(array[cont])
           
      FimPara

fimalgoritmo