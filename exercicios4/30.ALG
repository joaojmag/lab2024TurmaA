Algoritmo TipoTriangulo
Var
lado1, lado2, lado3: real

Inicio

Escreva("Digite o valor do lado 1: ")
Leia(lado1)

Escreva("Digite o valor do lado 2: ")
Leia(lado2)

Escreva("Digite o valor do lado 3: ")
Leia(lado3)

Se ((lado1 < lado2 + lado3) e (lado2 < lado1 + lado3) e (lado3 < lado1 + lado2)) Então
Se (lado1 = lado2) e (lado1 = lado3) Então
 Escreva("É um triângulo equilátero.")
Senão
Se (lado1 = lado2) Ou (lado1 = lado3) Ou (lado2 = lado3) Então
 Escreva("É um triângulo isósceles.")
Senão
 Escreva("É um triângulo escaleno.")
FimSe
FimSe
FimAlgoritmo
