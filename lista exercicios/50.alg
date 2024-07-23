algoritmo "semnome"
var
embaralhar,mostrar,tres,mqcinco:inteiro
inicio


Escreval("BEM VINDO AO SORTEADOR!")
Escreval("=========")

para embaralhar de 1 ate 20 faca
      mostrar<-randi(10)
      Escreva(mostrar)
   fimpara

   mostrar<-mostrar + 1


se(mostrar % 3 = 0)entao
   tres <- tres + 1
fimse

se(mostrar > 5)entao
   mqcinco <- mqcinco + 1
fimse



Escreval(mostrar)
Escreval("divisiveis por tres:",tres)
Escreva("maiores que cinco:",mqcinco)


fimalgoritmo
