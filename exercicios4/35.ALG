algoritmo "semnome"
var
tipoCarro:caractere
dias,aluguelDias: inteiro
km,precoKm,precoFinal:real
inicio
Escreval("Qual tipo de carro você deseja? Popular ou Luxo? ")
Leia(tipoCarro)
Escreval("Quantos dias de aluguel? ")
Leia(dias)
Escreval("Quantos km foram rodados? ")
Leia(km)

Se tipoCarro= "Popular" Entao
 aluguelDias<-90*dias
Senao
Se tipoCarro= "Luxo" Entao
 aluguelDias<-150*dias
FimSe

Se tipoCarro= "Popular" Entao
km<=100 Entao
precoKm<- 0.20*km
Senao
precoKm<- 0.10*km
FimSe

Se tipoCarro= "Luxo" Entao
km <=200 Entao
precoKm<- 0.30*km
Senao
precoKm<- 0.25*km
 FimSe
FimSe

precoFinal <-aluguelDias+precoKm

Escreva("O preço total a ser pago é de R$" , precoFinal)

fimalgoritmo
