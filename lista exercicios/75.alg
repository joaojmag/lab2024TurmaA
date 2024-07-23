algoritmo "semnome"
var
array:vetor[0..13] de inteiro
cnt,num,ndois,proximo:inteiro
inicio


num <- 1
ndois <- 1

Escreva(num)
Escreva(ndois)

para cnt de 3 ate 13 faca
   proximo <- num + ndois
   
   array[cnt] <- proximo
   
   Escreva(array[cnt])
   
   num <- ndois
   ndois <- proximo
   
fimpara
fimalgoritmo
