algoritmo "semnome"

var
idade,idadadeparamedia,maiorquevum,idades,somaidade:inteiro
continuar:caractere
mediaidade:real

inicio
Escreval("OLÁ USUARIO!")
Escreval("============")

continuar <- "S"

idade <- 0

enquanto (continuar = "S") ou (continuar = "s") faca
   Escreval("qual a sua idade?")
   Leia(idades)
   
   idade <- idade + 1
   
   se (idades >= 21) entao
      maiorquevum <- maiorquevum + 1

   fimse

   Escreva("você quer continuar? (S/N)")
   Leia(continuar)

somaidade <- somaidade + idades

fimenquanto

mediaidade <- somaidade / idade

Escreval("ao todo foram digitadas ",idade, " idades!")
Escreval("a média de idade é ", mediaidade:3:2)
Escreval("a ao todo ",maiorquevum, " que tem 21 anos ou igual.")

fimalgoritmo
