algoritmo "semnome"
var
contador,idades,menosAnos,maiorIdade:inteiro
media:real
inicio
contador<-1

Enquanto (contador<=10) Faca
 Escreva("Escreva a sua idade: ")
 Leia(idades)
 
  media<-(idades/10)
  
   Se (idades<5) entao
    menosAnos<-idades
   FimSe
   Se(idades>maiorIdade) entao
    maiorIdade<-idades
   FimSe
 
 contador<-contador+1
 
FimEnquanto
Escreval("A média da idade do grupo é de: ",media)
Escreval("A quantidade de pessoas que tinham menos de 5 anos é de ",menosAnos, " pessoas")
Escreval("A maior idade foi de", maiorIdade," anos")
fimalgoritmo