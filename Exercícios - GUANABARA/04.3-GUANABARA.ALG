Algoritmo "04.3-GUANABARA"

//Aula #04.3 Guanabara "Triãngulos"

var

   L1, L2, L3: Real
   EQ, ES, TRI: Logico

inicio

      Escreva("Digite o primeiro lado: ")
      Leia(L1)
      Escreva("Digite o segundo lado: ")
      Leia(L2)
      Escreva("Digite o terceiro lado: ")
      Leia(L3)
      
      TRI <- (L1 < L2 + L3) e (L2 < L1 + L3) e (L3 < L1 + L2)
      EQ <- (L1 = L2) e (L2 = L3)
      ES <- (L1 <> L2) e (L2 <> L3) e (L1 <> L3)
      
      Escreval ("O tringulo é Equilátero?", EQ)
      Escreval ("O triangulo é Escaleno?", ES)
      Escreval ("É UM TRIÃNGULO?", TRI)
      
fimalgoritmo