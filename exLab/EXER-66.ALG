algoritmo "Exer-66"

var
contador, valor, tabuada: inteiro
inicio
   escreval ("CONTAGEM COM PARA, TABUADA")
   escreval ("Qual tabuada gostaria de saber?")
   leia(valor)

   para contador <- 0 ate  10 faca
      tabuada <- contador * valor
      escreval (contador, " x ",valor, "= ", tabuada)
   fimPara

   escreval (" ACABOU!")

fimalgoritmo