Algoritmo "Exer-96"

Var
valor1, valor2: inteiro
resposta: real

funcao media (a, b: inteiro): real
inicio
   retorne (a + b)/2
fimFuncao

Inicio
   escreval ("FUNÇÃO - MÉDIA")
   escreval ()
   escreval ("   Vamos calcular a média de dois valores!!")
   escreval ()
   escreva ("Digite o primeiro valor: ")
   leia (valor1)
   escreva ("Digite o segundo valor: ")
   leia (valor2)
   
   resposta <- media(valor1, valor2)
   
   escreval ("A média dos valores é: ", resposta)

Fimalgoritmo