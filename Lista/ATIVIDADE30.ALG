Algoritmo "ATIVIDADE30"

Var

   lado1,lado2,lado3:inteiro

Inicio

   Escreval("Digite a medidada do lado 1")

   Leia(lado1)

   Escreval("Digite digite a medida do lado 2")

   Leia(lado2)

   Escreval("Digite a medida do lado 3")

   Leia(lado3)

   Se(lado1 + lado2 > lado3) e (lado2 + lado3 > lado1) e (lado1 + lado3 > lado2)entao

      Escreval("É possive formar um triangulo")

      Se(lado1 =  lado2) e (lado3 = lado2) e (lado1 = lado3)entao

         Escreva("Esse triangulo e equilatero")

      Senao

         Se(lado1 <>  lado2) e (lado3 <> lado2) e (lado1 <> lado3)entao

            Escreval("Esse triangulo e escaleno")

         Senao
            Se(lado1 = lado2 ) ou (lado2 = lado3) ou (lado3 = lado1)entao
               Escreval("isosceles")
            Senao
               Escreva("nao vai ter triangulo")
            fimse

         Fimse
      Fimse
   Fimse


Fimalgoritmo
