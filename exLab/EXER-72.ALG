Algoritmo "Exer-72"

Var
contador, valor: inteiro
posicao: vetor[1..10] de inteiro

Inicio
   escreval ("VETORES")
   valor <- 0
   para contador de 1 ate 10 faca
      valor <- valor + 5
      posicao[contador] <- valor
   fimPara

   para contador de 1 ate 10 faca
      escreval (posicao[contador])
   fimPara

Fimalgoritmo