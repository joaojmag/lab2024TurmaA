algoritmo "Exer-25"
var
 l1,l2,l3:real //L=lado
 eq, es, triangulo:logico    // EQ= equilatero
                            // ES= escaleno
inicio

  Escreval ("Vamos ver se é possível formar um triângulo?")
  Escreva  ("Digite o primeiro lado: ")
  leia (l1)
  Escreva  ("Digite o segundo lado: ")
  leia (l2)
  Escreva  ("Digite o terceiro lado: ")
  leia (l3)
  triangulo <- (l1<l2+l3) e (l2<l1+l3) e (l3<l1+l2)
  eq <- (l1=l2) e (l2=l3)
  es <- (l1<>l2) e (l2<>l3) e (l1<>l3)
  
  Escreval ("Pode formar um triângulo? ",triangulo)
  Escreval ("É um triângulo equilatero? ",eq)
  Escreval ("É um triângulo escaleno? ",es)
  
  
  
fimalgoritmo