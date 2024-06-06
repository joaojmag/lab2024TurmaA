algoritmo "semnome"
var
velocidade,multa:real

inicio
Escreva("Qual sua velocidade?(km):")
Leia(velocidade)
multa <-velocidade*5
se multa>80 Então
Escreva("você recebera uma multa pois passou do limite e esta é sua multa:",multa)
Senão
Escreva("tudo nos conformes")
fimse

fimalgoritmo
