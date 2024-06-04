algoritmo "exercicio_30"

var

   L1, L2, L3: Real
   TRI, EQ, ES, IS: Logico

inicio

      Escreva("Digite o primeiro lado: ")
      Leia(L1)
      Escreva("Digite o segundo lado: ")
      Leia(L2)
      Escreva("Digite o terceiro lado: ")
      Leia(L3)
      Escreval("-------------------------")

      TRI <- (L1 < L2 + L3) e (L2 < L1 + L3) e (L3 < L1 + L2)
      EQ <- (L1 = L2) e (L2 = l3)
      IS <- (L1 = L2) ou (L2 = L3) ou (L3 = L1)
      ES <- (L1<> L2) e (L2 <> L3) e (L1 <> L3)

      se (TRI = verdadeiro) entao
         Escreval ("É UM TRIÃNGULO")
      senao
         Escreval("NÃO É UM TRIÂNGULO")
      fimse
      
      se (EQ = verdadeiro) entao
         Escreval("É UM TRIANGULO EQUILATERO.")
      fimse

      se (ES = verdadeiro) entao
         Escreval("É UM TRIANGULO ESCALENO.")
      fimse
      
      se (IS = verdadeiro) entao
         Escreval("É UM TRIANGULO ISÓSCELES.")
      fimse

fimalgoritmo