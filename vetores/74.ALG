Algoritmo "74"

Var
valores: vetor[0..10] de inteiro
indice: inteiro

Inicio
   // Preenchendo o vetor com valores
   para indice de 0 ate 9 faca
   
      Se (indice % 2 = 0) Entao
        valores[indice] <- 5
      Senao
        valores[indice] <- 3
      FimSe

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
