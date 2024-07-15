Algoritmo "Exer-94"

Var
termo, contador, anterior, resultado, auxiliar: inteiro
procedimento fibonacci(t: inteiro)
inicio
anterior <- 1
resultado <- 1
   para  contador de 1 ate termo faca
      auxiliar <- resultado
      escreval (resultado)
      resultado <- resultado + anterior
      anterior <- auxiliar
   fimPara
   
fimProcedimento

Inicio
   escreval ("PROCEDIMENTO - FIBONACCI")
   escreval()
   escreval ("Vamos verificar a sequencia Fibonacci")
   escreva ("Quantos termos gostaria de ver? ")
   leia(termo)
   
   fibonacci(termo)

Fimalgoritmo