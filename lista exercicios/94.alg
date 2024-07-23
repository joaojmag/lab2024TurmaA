algoritmo "semnome"
var
resultado:inteiro

procedimento Fibonacci(quantidade:inteiro)
   var
      num,ndois,inte: inteiro
   inicio
      num <- 1
      ndois <- 1

      Escreva(num)
      Se quantidade > 1 entao
         Escreva(" ", ndois)
      fimse

      para inte de 3 ate quantidade faca
         resultado <- num + ndois
         Escreva(" ", resultado)
         num <- ndois
         ndois <- resultado
      fimpara

fimprocedimento

inicio

 Fibonacci(5)
 
fimalgoritmo

