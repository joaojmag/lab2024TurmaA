algoritmo "semnome"
var
peso,altura,mediagrupo,valor:real
contador,noventa,cinquenta,umesessenta,cem,alturacontador:inteiro
inicio
Escreval("bem vindo ao MinasMaisPesos!")
Escreval("==============================")

contador <- 1

enquanto (contador <= 7) faca
   Escreva("diga o peso da ",contador, " pessoa:")
   Leia(peso)
   Escreva("diga a altura desta pessoa:")
   Leia(altura)


      contador <- contador + 1
      mediagrupo <- altura <- altura/(cont-1)


se (peso > 90) entao
   noventa <- noventa + 1
fimse

se (peso < 50) e (altura < 1.60) entao
   cinquenta <- cinquenta + 1
   umesessenta <- umesessenta + 1
fimse

se (altura > 1.90) e (peso > 100) entao
   cem <- cem + 1
fimse


fimenquanto
Escreval("a média do grupo é ",mediagrupo:3:2)
Escreval("há",noventa," pessoas com mais de 90 kilos!")
Escreva("há",cem," pessoas com mais de 1.90 e com mais de 100 kilos!")

fimalgoritmo
