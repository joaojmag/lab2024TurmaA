Algoritmo "Exer-92"

Var
numero: inteiro

procedimento parOuImpar (v: inteiro)
inicio
   se (v % 2 = 0) entao
      escreval ("O número (", v, ") é PAR")
   seNao
      escreval ("O número (", v, ") é IMPAR")
   fimSe
fimProcedimento

Inicio
   escreval ("PROCEDIMENTO - PAR OU IMPAR")
   escreval()
   escreva ("Digite um número: ")
   leia (numero)
   parOuImpar(numero)

Fimalgoritmo