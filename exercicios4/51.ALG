algoritmo "semnome"
var
 contador:inteiro
 valorProduto,maior,menor:inteiro
inicio
 contador<-1
Enquanto (contador<=8)  Faca
 Escreval("Escreva o valor do seu" , contador, "o. produto: ")
 Leia(valorProduto)

   Se (valorProduto>maior)entao
     maior<-valorProduto
   FimSe
   Se (valorProduto<maior)então
     menor<-valorProduto
   FimSe
     
 contador<-contador+1
FimEnquanto
Escreval("O maior preço foi de R$: ",maior)
Escreval("O menor preço foi de R$: ",menor)
fimalgoritmo