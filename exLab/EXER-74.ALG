Algoritmo "Exer-74"

Var
contador, valor1, valor2: inteiro
posicao: vetor[1..10] de inteiro

Inicio
   escreval ("VETORES")
   valor1 <- 5
   valor2 <- 3
   para contador de 1 ate 10 faca
      se (contador % 2 = 0) entao
         posicao[contador] <- valor2
      senao
         posicao[contador] <- valor1
      fimSe
   fimPara

   para contador de 1 ate 10 faca
      escreval (posicao[contador])
   fimPara


Fimalgoritmo