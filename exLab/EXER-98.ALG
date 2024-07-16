Algoritmo "Exer-98"

Var
valor1, valor2: inteiro
resposta, soma, contador: inteiro

//========================================
funcao superSomador (a, b: inteiro): inteiro
inicio
   para contador de a ate b faca
      soma <-  soma + contador
   fimPara
   
   retorne soma
fimFuncao

//========================================

Inicio
   escreval ("PROCEDIMENTOS - SUPER SOMADOR")
   escreval ()
   
   escreval ("Vamos somar os intervalos?")
   escreva  ("Digite o primeiro valor: ")
   leia (valor1)
   escreva  ("Digite o segundo valor: ")
   leia (valor2)

   resposta <- superSomador(valor1, valor2)
   
   escreval ("A soma dos intervalos entre os valores é: ", resposta)
Fimalgoritmo