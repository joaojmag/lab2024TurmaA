Algoritmo "Exer-70"

Var
contador, resultado, anterior, auxiliar : inteiro

Inicio
   escreval ("SEQUÊNCIA DE FEBONACCI")

   anterior <- 1
   resultado <- 1

   para  contador de 1 ate 10 faca
      auxiliar <- resultado
      escreval (resultado)
      resultado <- resultado + anterior
      anterior <- auxiliar
   fimPara
   
   escreva ("Acabou!")
Fimalgoritmo