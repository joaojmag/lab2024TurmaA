Algoritmo "73"

Var
valores: vetor[0..9] de inteiro
indice: inteiro

Inicio
   // Preenchendo o vetor com valores
   para indice de 0 ate 9 faca
      valores[indice]  <-  9 - indice
   fimpara

   // Exibindo o vetor preenchido
   para indice de 0 ate 9 faca
      escreva(valores[indice], "  ")
   fimpara
   escreval(" ")

   para indice de 0 ate 9 faca
      escreva(indice, "  ")
   fimpara

Fimalgoritmo
