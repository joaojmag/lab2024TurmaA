algoritmo "semnome"
var
peso,altura,IMC:real
inicio
Escreval("OLÁ BEM VINDO AO INDICE DE PESO!")
Escreval("-----------------------------------")
Escreval("qual a sua massa?")
Leia(peso)
Escreval("qual a sua altura?")
Leia(altura)

  IMC<-peso/(altura^2)
  
se (IMC>=18.5)e(IMC<25)entao
Escreva("Você esta no seu peso ideal!")
senao
Escreva("você esta abaixo do peso.")
fimse
   se (IMC>=25)e(IMC<30)entao
   Escreva("você esta no seu sobrepeso")
   fimse
se(IMC>=30)e(IMC<40)entao
Escreva("você esta obeso!")
fimse
se(IMC>40)entao
Escreva("você esta com obesidade mórbida!")
fimse


fimalgoritmo
