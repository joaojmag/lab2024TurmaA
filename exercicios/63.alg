algoritmo "semnome"
var
continuar:caractere
numeros,somatorio,menorvalor,contador:inteiro
entrar:logico
pares,media:real
inicio

Escreval("OLÁ USUARIO")
Escreval("==============")

continuar <- "S"
entrar <- verdadeiro
pares <- 0

enquanto (continuar = "S") ou (continuar = "s") faca
   Escreva("digite um numero:")
   Leia(numeros)
   
   somatorio <- somatorio + numeros
   contador <- contador + 1
   
   se entrar entao
      menorvalor <- numeros
      entrar <- falso
   fimse

   se (numeros < menorvalor) entao
      menorvalor <- numeros
   fimse
   
   se (numeros % 2 = 0) entao
      pares <- pares + 1
   fimse
   
   Escreva("você quer continuar? (S/N)")
   Leia(continuar)
   
   
   
   
fimenquanto

media <- somatorio / numeros

Escreval("a soma dos numeros foi ",somatorio)
Escreval("o menor valor é ",menorvalor)
Escreval("no total há ",pares, " numeros pares.")
Escreval("a média dos numeros é:",media:3:2)
fimalgoritmo
