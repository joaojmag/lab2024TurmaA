Algoritmo "Exer-73"

Var
contador, valor: inteiro
posicao: vetor[1..10] de inteiro

Inicio
   escreval ("VETORES - CONTAGEM REGRESSIVA")
   valor <- 10
   para contador de 1 ate 10 faca
      valor <- valor - 1
      posicao[contador] <- valor
   fimPara

   para contador de 1 ate 10 faca
      escreval (posicao[contador])
   fimPara

Fimalgoritmo