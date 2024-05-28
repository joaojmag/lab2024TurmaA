algoritmo "exercicio_25"

var

   L1, L2, L3: Real
   TRI: Logico

inicio

      Escreva("Digite o primeiro lado: ")
      Leia(L1)
      Escreva("Digite o segundo lado: ")
      Leia(L2)
      Escreva("Digite o terceiro lado: ")
      Leia(L3)

      TRI <- (L1 < L2 + L3) e (L2 < L1 + L3) e (L3 < L1 + L2)

      se (TRI = verdadeiro) entao
         Escreval ("É UM TRIÃNGULO")
      senao
         Escreva("NÃO É UM TRIÂNGULO")
      fimse

fimalgoritmo