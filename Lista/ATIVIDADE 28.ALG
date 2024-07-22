algoritmo "ATIVIDADE 28"
var

largura,comprimento,calculo:real

inicio

Escreva("qual é a largura do terreno?")

Leia(largura)

Escreva("Qual é o comprimento desse terreno?")

Leia(comprimento)

 calculo <- largura * comprimento

Se(calculo < 100 )entao

Escreva("Esse terreno é popular")

Fimse

Se(calculo >= 100 ) e (calculo <= 500 )entao

Escreva("Esse terreno é master")

Fimse

Se(calculo >= 500)entao

Escreva("Esse terreno é vip")


Fimse

fimalgoritmo