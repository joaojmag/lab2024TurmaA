Algoritmo "semnome"

var
lado1,lado2,lado3:real
Inicio
   escreva("qual o valor do lado1")
   leia(lado1)
   
    escreva("qual o valor do lado2")
   leia(lado2)

    escreva("qual o valor do lado3")
   leia(lado3)



  se (lado1=lado2) e (lado2=lado3) e (lado1= lado3)entao
     escreval("triangulo equilatero   ")
  senao
      se (lado1=lado2) ou (lado2=lado3) ou (lado1= lado3)entao
      escreval("triangulo isóceles")
  senao
     escreval("triangulo escaleno")
     FimSE
FimSe

Fimalgoritmo