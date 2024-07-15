Algoritmo "Exer-95"

Var
valor1, valor2: inteiro
soma: inteiro
//----------------
funcao somador(a, b: inteiro) : inteiro
inicio
   retorne a + b
fimFuncao
//----------------
Inicio
   escreval ("FUNÇÃO - SOMADOR")
   escreval ()
   escreval ("Vamos calcular a somar de dois valores: ")
   escreval ()
   escreva ("Digite o primeiro valor: ")
   leia (valor1)
   escreva ("Digite o segundo valor: ")
   leia (valor2)

   soma <- somador(valor1, valor2)
   escreval ("O resultado da soma é: ", soma)

Fimalgoritmo