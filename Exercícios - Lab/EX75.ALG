Algoritmo "Ex75"

//75) Crie um programa que preencha automaticamente (usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 15 posições com os primeiros
//elementos da sequência de Fibonacci:

Var
   array : vetor[0..15] de Inteiro
   cont, num1, num2, c : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________" )
      EscrevaL ("|                    |")
      EscrevaL ("| Fibonacci c/ vetor |")
      EscrevaL ("|____________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      num1 <- 0
      array[0] <- 1
      Escreva(array[0])
      
      num2 <- 1
      array[1] <- num2
      
      Para cont <- 1 ate 15 faca
      
         c <- c + 1
         cont <- num1 + num2
         array[c] <- cont
         num1 <- num2
         num2 <- cont
         
         Escreva(array[c])
         
      FimPara

fimalgoritmo