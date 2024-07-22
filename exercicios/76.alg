algoritmo "semnome"
var
array:vetor[0..7] de inteiro
cnt,alt:inteiro
inicio

Escreval("NUMEROS ALEATORIOS!")
Escreval("====================")

para cnt de 0 ate 7 faca
   alt <- randi(2000)
   array[cnt] <- alt
   Escreva(array[cnt])
fimpara
fimalgoritmo
