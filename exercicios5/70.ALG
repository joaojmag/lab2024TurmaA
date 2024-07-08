Algoritmo "Sequência de Fibonacci"

var
   primeiro, segundo, proximo, contador: inteiro

inicio
   primeiro <- 1
   segundo <- 1

   escreval(primeiro, " ")
   escreval(segundo, " ")

   // Mostra os 8 próximos elementos da sequência
   para contador <- 1 ate 8 faca
      proximo <- primeiro + segundo
      escreval(proximo, " ")
      
      primeiro <- segundo
      segundo <- proximo
   fimpara

fimalgoritmo

