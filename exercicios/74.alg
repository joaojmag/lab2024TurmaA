algoritmo "semnome"
var
array:vetor [0..5] de inteiro
cnt,num,reg:inteiro
inicio

Escreval("VETOR!")
Escreval("======")

num <- 5

para cnt de 0 ate 5 faca
   reg <- num - 2
   array[cnt] <- reg
   Escreva(num,array[cnt])
fimpara
fimalgoritmo
