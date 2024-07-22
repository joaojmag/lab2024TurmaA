algoritmo "semnome"
var
sexo:caractere
peso,pesof,mediaf,pesom,mediam,maiorpeso,cemkg:real
contadorp,contadorf:inteiro

inicio
Escreval("bem vindo ao calculador de peso!")
Escreval("================================")

para contadorp de 1 ate 3 faca
   Escreval("qual seu sexo?(M/F)")
   Leia(sexo)
   
   se (sexo <> "F") e (sexo <> "f") e (sexo <> "M") e (sexo <> "m") entao
      Escreval("reescreva seu sexo!")
   fimse
   
   se (sexo = "F") ou (sexo = "f")entao
      Escreval("qual o seu peso?")
      Leia(pesof)
      
      contadorf <- contadorf + 1
      mediaf <- mediaf + pesof
   fimse
   
   se (sexo = "M") ou (sexo = "m") entao
      Escreval("qual seu peso?")
      Leia(pesom)
      
      se (pesom > 100) entao
         cemkg <- cemkg + 1)
      fimse
      
      se (pesom  > maiorpeso) entao
         maiorpeso <- pesom
      fimse
  fimse
fimpara

Escreval("ao todo foram cadastradas ",contadorf," mulheres!")
Escreval("ao todo ",cemkg," homens tem o peso maior que 100!")
Escreval("a média de peso feminino é ",mediaf)
Escreval("o maior peso de homens é ",maiorpeso)

      


fimalgoritmo
