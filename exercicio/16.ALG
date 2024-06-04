algoritmo "fumante"

var
anosFumados,quantidadeCigarros,minutos, horas,totalDias,quantosminutos:real
inicio

Escreva("Quantos cigarros você fuma por dia? ")
Leia(quantidadeCigarros)

Escreva("Por quantos anos você já fumou? ")
Leia(anosFumados)


quantidadeCigarros<-quantidadeCigarros* 365 * anosFumados
minutos<-quantidadeCigarros * 10
totalDias<-minutos /( 24*60 )
horas<- ( totalDias - int(totalDias) ) *24
quantosminutos<- (horas - int(horas) ) *60



Escreva("Você perderá aproximadamente ", int(totalDias) , " dias ,",int( horas ), " horas e ",int(quantosminutos), "minutos  de vida devido ao cigarro.")


fimalgoritmo

