algoritmo "exercicio_76"
var

   num: vetor[0..7] de inteiro
   R, cont: inteiro
   numPar, numImpar: inteiro

inicio

      cont <- 0
      Para cont <- 1 ate 7 faca
           R <- randi(1000)
           num[cont] <- R
           Escreva(num[cont])
           
           se (num[cont] % 2 = 0) entao
              numPar <- numPar + 1
           senao
              numImpar <- numImpar + 1
           fimse
           
      fimpara
      
      Escreval("")
      Escreval(numPar, " SÃO NÚMEROS PARES.")
      Escreval(numImpar, " SÃO NÚMEROS ÍMPARES.")

fimalgoritmo