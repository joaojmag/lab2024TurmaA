Algoritmo "Ex72"

//72) Crie um programa que preencha automaticamente (usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
// |5|10|15|20|25|30|35|40|45|50

Var
   array : vetor[0..9] de Inteiro
   cont, num : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ___________________" )
      EscrevaL ("|                   |")
      EscrevaL ("| de 5 em 5 até 50  |")
      EscrevaL ("|___________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      num <- 0
      Para cont <- 0 ate 9 faca
      
           num <- num +5
           array[cont] <- num
           Escreva(array[cont])

      FimPara

fimalgoritmo

