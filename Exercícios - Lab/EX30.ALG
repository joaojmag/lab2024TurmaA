Algoritmo "Ex30"


//30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
//de triângulo será formado:
//- EQUILÁTERO: todos os lados iguais
//- ISÓSCELES: dois lados iguais
//- ESCALENO: todos os lados diferentes

var

   l1, l2, l3: Real
   eq, es, iso, tri: Logico
   
inicio

      EscrevaL (" _______________________________" )
      EscrevaL ("|                               |")
      EscrevaL ("| Que tipo de Triângulo é esse? |")
      EscrevaL ("|_______________________________|")
      EscrevaL (" ")

      tri <- (l1 < l2 + l3) e (l2 < l1 + l3) e (l3 < l1 + l2)
      eq <- (l1 = l2) e (l2 = l3)
      es <- (l1 <> l2) e (l2 <> l3) e (l1 <> l3)
      iso <- (l1 = l2) ou (l1 = l3) ou (l2 = l3)
      
      Escreval ("É POSSÍVEL CRIAR UM TRIÃNGULO?", tri)
      
      Se (tri = verdadeiro) entao
      
         Escreval ("O triângulo é Equilátero?", eq)
         Escreval ("O triângulo é Escaleno?", es)
         Escreval ("O triângulo é Isósceles?", iso)
      
      FimSe

fimalgoritmo