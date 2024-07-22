algoritmo "semnome"
var
array:vetor[0..30] de inteiro
cnt,alt,numero:inteiro
inicio
Escreval("POSIÇÕES ALEATORIAS!")
Escreval("==========")

para cnt de 1 ate 30 faca
   alt <- randi(15)
   array[cnt] <- alt
fimpara

Escreval("digite o numero chave! (1 ate 15)")
Leia(numero)

para cnt de 1 ate 30 faca
   Escreva( array[cnt])
fimpara

para cnt de 1 ate 30 faca
   se (numero = array[cnt]) entao
      Escreval("a posição do numero escrito é [",cnt,"]")
   fimse
fimpara

fimalgoritmo
