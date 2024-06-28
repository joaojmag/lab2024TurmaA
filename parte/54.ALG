algoritmo "semnome"
var
contador,valor,pesaMais,pesaMenos:inteiro
peso,altura,mediaAltura,alturaePeso:real
inicio
pesaMais <- 0
pesaMenos <- 0
contador <- 1
valor <- 7

Enquanto ( contador <= valor ) Faca

   Escreval("Escreva seu peso em Kg: ")
   Leia( peso )
   Escreval("Escreva sua altura em metros: ")
   Leia( altura )
   
   mediaAltura <- valor/altura
   
   Se ( peso > 90 ) Entao
      pesaMais <- pesaMais + 1
   FimSe
    
   Se ( peso < 50 ) e ( altura < 1.60 )Entao
      pesaMenos <- pesaMenos + 1
   FimSe

   Se (altura > 1.90 ) e (peso > 100) Entao
      alturaePeso <- alturaePeso + 1
   FimSe

   

   contador <-  contador + 1

FimEnquanto

Escreval("Média de altura do grupo ", mediaAltura)
Escreval("Quantas pessoas pesam mais de 90kg:  ", pesaMais)
Escreval("Quantas pessoas pesam menos de 50kg e menos de 1,60 : ", pesaMenos)
Escreval("Quantas pessoas medem mais de 1.90m pesando mais de 100kg", alturaePeso)

fimalgoritmo
