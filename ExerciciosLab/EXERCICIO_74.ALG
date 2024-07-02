algoritmo "exercicio_74"
var

   v: vetor[0..9] de inteiro
   num, cont: inteiro

inicio

      Para cont <- 0 ate 9 passo 2 faca
           num <- 3
           v[cont] <- num + 2
           Escreva(v[cont])
           v[cont] <- v[cont] - 2
           Escreva(v[cont])
      fimpara

fimalgoritmo