algoritmo "semnome"
var
cnt,num,ndois,proximo:inteiro
inicio
Escreval("SEQUENCIA DE FIBONACCI!")
Escreval("=======================")

num <- 1
ndois <- 1

Escreval(num)
Escreval(ndois)

para cnt de 3 ate 10 faca
   proximo <- num + ndois
   Escreval(proximo)
   
   num <- ndois
   ndois <- proximo

fimpara

fimalgoritmo
