algoritmo "semnome"
var
array:vetor[0..8] de inteiro
mediaidade:real
somaidade,maioridade,cnt:inteiro
inicio

para cnt de 1 ate 8 faca
   Escreva("digite a idade:")
   Leia(array[cnt])

   mediaidade <- mediaidade + array[cnt]
fimpara

para cnt de 1 ate 8 faca
   se (array[cnt] > 25) entao
   Escreval("as pessoas com mais de 25 anos estão na posição [",cnt,"]")
   fimse
   
   se (array[cnt] > maioridade) entao
   maioridade <- array[cnt]
   fimse
   
fimpara


Escreval("a media de idade das pessoas cadastradas é ",mediaidade / cnt:3:2)
Escreval("a(s) maiores idades digitada(s) foram ",maioridade)



fimalgoritmo
