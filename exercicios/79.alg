algoritmo "semnome"
var
array:vetor[0..10] de inteiro
cnt:inteiro
inicio
Escreval("NUMEROS PARES SERAM MARCADOS COM []")
Escreval("====================================")

para cnt de 1 até 10 faca
   Escreval("digite um numero")
   Leia(array[cnt])
fimpara

para cnt de 1 até 10 faca
   se (array[cnt] % 2 = 0) entao
   Escreva("[",cnt,"]")
   fimse
fimpara

fimalgoritmo
