algoritmo "semnome"
var
array:vetor[0..10] de inteiro
contar,salto:inteiro
inicio
Escreval("DE 5 EM 5!")
Escreval("==========")

salto <- 0

para contar de 0 ate 10 faca
   salto <- salto + 5
   array[contar] <- salto
   Escreva(array[contar])
fimpara

fimalgoritmo
