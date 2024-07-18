algoritmo "semnome"
var
largura,comprimento,area:inteiro


inicio
Escreva("Digite a largura do terreno ")
Leia(largura)
Escreva("Digite o comprimento do terreno: ")
Leia(comprimento)

area<-largura*comprimento

Se (area<100) Entao
 Escreva("Terreno Popular")
Senao
Se (area>100) e (area<=500)Entao
 Escreva("Terreno Master")
Senao
Se (area>500)Entao
 Escreva("Terreno VIP")
  FimSe
 FimSe
FimSe
fimalgoritmo