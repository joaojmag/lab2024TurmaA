Algoritmo "Exer-99"

Var
base, expoente: inteiro
resposta: real
valor, contador: inteiro

//=================================
funcao potencia(a, b: inteiro): inteiro
inicio
valor <- 1

   se (b <> 0) entao
      para contador de 1 ate b faca
      valor <- valor * a
   fimPara
   retorne valor

   seNao
      retorne (1)
   fimSe

fimFuncao
//=================================

Inicio
   escreval ("FUNÇÃO - POTENCIA")
   escreval ("Calculando potencia")
   escreval ()
   
   escreva  ("Digite a base: ")
   leia (base)
   escreva  ("Digite o expoente: ")
   leia (expoente)

   resposta <- potencia(base, expoente)
   
   escreva (base," elevado a ",expoente, " é: ", resposta)
Fimalgoritmo