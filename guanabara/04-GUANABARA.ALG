algoritmo "04-GUANABARA"

var
 L1, L2, L3: real
 EQ, ES: logico
  


inicio

    escreva ("Digite o primeiro lado: ")
    Leia (L1)
    escreva ("Digite o segundo lado: ")
    leia (L2)
    escreva ("Digite o terceiro lado: ")
    leia (L3)
    EQ <- (L1=L2) e (L2=L3)
    ES <- (L1<>L2) E (L2<>L3) E (L1<>L3)
    ESCREVAL ("O triândulo é EQUILÁTERO?", EQ)
    ESCREVA ("O triângulo é  ESCALENO?", ES)
fimalgoritmo