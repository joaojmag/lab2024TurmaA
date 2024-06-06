algoritmo "Exer-30"


var

 l1,l2,l3:real                   //L=lado
 eq, es, is, triangulo:logico    // EQ= equilatero
                                 // ES= escaleno
                                 // IS= isosceles
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
  is <- (l1=l2) ou (l2=l3) ou (l1=l3)


  se (triangulo<>verdadeiro) entao
     escreva ("Não é um triângulo")
  senao
       se (eq=verdadeiro) entao
          escreva ("É um triângulo EQUILÁTERO")
       senao
            se (es= verdadeiro) entao
               escreva ("É um triângulo ESCALENO")
            senao
                 se(is=verdadeiro) entao
                    escreva ("É um triângulo ISÓSCELES")
                 fimse
            fimse
       fimse
  fimse


fimalgoritmo