Algoritmo "Ex73"

//73) Crie um programa que preencha automaticamente (usando lógica, não apenas
//tribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// |9|8|7|6|5|4|3|2|1|0

Var
   array : vetor[0..10] de Inteiro
   cont, num : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ___________________" )
      EscrevaL ("|                   |")
      EscrevaL ("| Vetor de 9 até 0  |")
      EscrevaL ("|___________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      num <- 10
      Para cont <- 0 ate 9 faca

           num <- num -1
           array[cont] <- num
           Escreva(array[cont])

      FimPara

fimalgoritmo
