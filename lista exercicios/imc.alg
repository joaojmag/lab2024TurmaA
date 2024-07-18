Algoritmo "semnome"

var
altura,peso,imc:real


Inicio
escreva("qual sua altura?")
leia(altura)
 escreva("qual seu peso?")
leia(peso)

imc<-(altura * altura)/peso
escreval("seu imc é " ,    int(imc))

se(imc<18.5)entao
  escreval("abaixo do peso")
senao
se(imc>=18.5)e(imc<25)entao
  escreval("peso ideal")
senao
se(imc>=25)e (imc<30)entao
  escreval("sobrepeso")
senao
se(imc>=30)e(imc<40)entao
  escreval("obesidade")
senao(imc>40)
  escreval("obesidade morbida")


 FimSe
FimSe
FimSe
FimSe

Fimalgoritmo