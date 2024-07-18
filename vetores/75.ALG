Algoritmo "75"

Var
valores: vetor[0..15] de inteiro
indice,primeiro,segundo,proximo: inteiro

Inicio
primeiro <- 1
segundo <- 1

   escreval(primeiro, "  ")
   escreval(segundo, "  ")
   
   para indice de 1 ate 14 faca
      proximo <- primeiro + segundo
      escreva(proximo, "  ")
      
      primeiro <- segundo
      segundo <- proximo

   fimpara

   // Exibindo o vetor preenchido
   escreval("   ")

   para indice de 0 ate 15 faca
      escreva(indice, "  ")
   fimpara

Fimalgoritmo
