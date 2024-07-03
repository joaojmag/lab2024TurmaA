Algoritmo "Exer-75"

Var
contador, resultado, anterior, auxiliar: inteiro
posicao: vetor[0..14] de inteiro

Inicio
   escreval ("VETORES - SEQUÊNCIA DE FEBONACCI")

   anterior <- 1
   resultado <- 1
   
   para contador de 0 ate 14 faca
       auxiliar <- resultado
       posicao[contador] <- resultado
      resultado <- resultado + anterior
      anterior <- auxiliar
   fimPara
   
   para contador de 0 ate 14 faca
      escreval ( posicao [contador])
   fimPara
   
Fimalgoritmo