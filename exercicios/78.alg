algoritmo "semnome"
var
array:vetor[0..15] de inteiro
cnt,quebrados:inteiro
inicio
Escreval("MULTIPLOS DE 10!")
Escreval("================")
Escreval("numeros multiplos de 10 seram marcados com []")
Escreval("=============================================")

para cnt de 1 ate 15 faca
   Escreva("digite um numero:")
   Leia(array[cnt])
fimpara

para cnt de 1 ate 15 faca
     se (array[cnt]% 10 = 0) entao
      Escreva("[",cnt,"]")
     fimse
   
   
   
fimpara

fimalgoritmo
