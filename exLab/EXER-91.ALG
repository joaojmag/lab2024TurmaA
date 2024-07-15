Algoritmo "Exer-91"

Var
valor1, valor2: inteiro

Procedimento maior(a, b: inteiro)
inicio
   se (a > b) entao
      escreval ("O primeiro valor (",valor1, ") é maior")
   senao
      se (b > a) entao
         escreval ("O segundo valor (",valor2, ") é maior")
      seNao
         escreval ("Os valores são iguais")
      fimSe
   fimSe

fimProcedimento

Inicio
   escreval ("PROCEDIMENTO - MAIOR")
   escreval ()
   escreva ("Digite o primeiro valor: ")
   leia (valor1)
   escreva ("Digite o segundo valor: ")
   leia (valor2)
   
   maior(valor1, valor2)

Fimalgoritmo