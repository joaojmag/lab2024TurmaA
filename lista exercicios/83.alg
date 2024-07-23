algoritmo "semnome"
var
array:vetor[0..20] de inteiro
cnt,alt,c,jump:inteiro
inicio

para cnt de 1 ate 20 faca
   alt <- randi(99)
   array[cnt] <- alt
   Escreva(array[cnt])
fimpara


para cnt de 1 ate 20 faca
   para c de 1 ate 20 faca
      se array[cnt] < array[c] entao
         jump <- array[cnt]
         array[cnt] <- array[c]
         array[c] <- jump
      fimse
   fimpara
fimpara

para cnt de 1 ate 20 faca
   Escreva(array[cnt])
fimpara






fimalgoritmo
