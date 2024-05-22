Algoritmo "Ex11"

//11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
//segundo grau e mostre o valor de Delta.

Var

      x1, x2, delta : Real
      a, b, c: Inteiro

Inicio

      Escreva("Informe o valor de A: ")
      Leia(a)
      Escreva("Informe o valor de B: ")
      Leia(b)
      Escreva("Informe o valor de C: ")
      Leia(c)
      
      Escreval(a,"x2 +", b, "x +", c, " = 0")
      delta := (b*b) - 4*a*c
      
      Escreva("O valor de Delta é", Delta)

Fimalgoritmo