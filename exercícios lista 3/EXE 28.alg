Algoritmo "semnome"





 var



largura, comprimento, area: real





Inicio

escreva("Digite a largura do terreno : ")

leia(largura)

escreva("Digite o comprimento do terreno : ")

leia(comprimento)

//calculando

area <- largura * comprimento

escreva("A área do terreno é: ", area, " m²")

//se

se area < 100 Então

   escreva(" - terreno popular")

senao
se (area >= 100) e (area <=500 ) Então

   escreva(" - terreno master")

senao
    escreva(" - terreno vip")

    FimSe
FimSe



Fimalgoritmo