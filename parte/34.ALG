algoritmo "semnome"
var
altura,peso,imc= real
inicio
Escreva("Digite sua altura(M): ")
Leia(altura)
Escreva("Digite seu peso(Kg): ")
Leia(peso)

imc<-peso/(altura*altura)

Se imc<18.5 Entao
Escreva("Abaixo do peso")
Senao
Se (imc>18.5) e (imc<=25) Entao
Escreva("Você está no peso ideal")
Senao
Se (imc>25) e (imc<=30) Entao
Escreva("Você está com Sobrepeso")
Senao
Se (imc<30) e (imc<40)Entao
Escreva("Você está com Obesidade")
   FimSe
  FimSe
 FimSe
FimSe
fimalgoritmo
