algoritmo "semnome"
var
array:vetor[0..10] de real
cnt,acimadamedia:inteiro
media,maiornota:real
inicio

para cnt de 1 ate 10 faca
   Escreva("digite a nota ",cnt,":")
   Leia(array[cnt])
fimpara

para cnt de 1 ate 10 faca
   media <- media + array[cnt]
fimpara

para cnt de 1 ate 10 faca
   se (array[cnt] >= 5) entao
      acimadamedia <- acimadamedia + 1
   fimse
   
   se (array[cnt] > maiornota) entao
      maiornota <- array[cnt]
   fimse
fimpara

Escreval("a média da turma é:",media/10)
Escreval("a seguinte contagem de alunos esta acima da média ",acimadamedia)
Escreval("a maior nota digitada foi ",maiornota)

fimalgoritmo
