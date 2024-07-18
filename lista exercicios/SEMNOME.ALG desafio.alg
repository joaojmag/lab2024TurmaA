Algoritmo "semnome"
var
lado1,lado2,lado3:real

Inicio
Escreva("Digite o tamanho do primeiro segmento : ")
Leia(lado1)
Escreva("Digite o tamanho do segundo segmento: ")
Leia(lado2)
Escreva("Digite o tamanho do terceiro segmento : ")
Leia(lado3)

Se (lado1 < lado2 + lado3) E (lado2 < lado1 + lado3) E (lado3 < lado1 + lado2) Então
Escreva("É possível formar um triângulo .")
Senão
Escreva("Não é possível formar um triângulo.")
FimSe

Fimalgoritmo
