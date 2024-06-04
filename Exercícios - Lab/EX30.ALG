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
      
      Escreva (" Digite o primeiro lado: ")
      Leia(l1)
      
      Escreva (" Digite o segundo lado: ")
      Leia(l2)
      
      Escreva (" Digite o terceiro lado: ")
      Leia(l3)

      tri <- (l1 < l2 + l3) e (l2 < l1 + l3) e (l3 < l1 + l2)
      eq <- (l1 = l2) e (l2 = l3)
      es <- (l1 <> l2) e (l2 <> l3) e (l1 <> l3)
      iso <- (l1 = l2) ou (l1 = l3) ou (l2 = l3)
      
      EscrevaL(" ")
      
      Se (tri <> verdadeiro) entao
      
         EscrevaL(" Não é um triângulo.")
      Senao
      
         Se (eq = verdadeiro) entao
            Escreval ("O triângulo é Equilátero.")
            
         Senao
              Se (es = verdadeiro) entao
                 Escreval ("O triângulo é Escaleno.")  //Todo triangulo retangulo é escaleno
              Senao
                   Se (iso = verdadeiro) entao
                   Escreval ("O triângulo é Isósceles")
                   FimSe
              FimSe
         FimSe
      FimSe

fimalgoritmo
