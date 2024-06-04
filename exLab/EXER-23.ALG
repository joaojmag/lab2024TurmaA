algoritmo "Exer-23"

var
 sexo: real
 valor, descontoM, descontoH: real
inicio
 Escreval ("Vamos descobrir o valor de seus desconto!!!")
 Escreval ("Qual seu sexo?")
 Escreval ("[ 1 ] Mulher")
 Escreval ("[ 2 ] Homem")
 Leia     (sexo)
 Escreval ("Qual valor da sua compra?")
 leia     (valor)
 Escolha sexo
   caso 1
     descontoM <- valor*0.13
     Escreval ("Seu desconto será de: R$" ,descontoM)
     Escreval ("O valor da sua compra é: R$", valor-descontoM)

   caso 2
       descontoH <- valor*0.05
       Escreval ("Seu desconto será de: R$" ,descontoH)
       Escreval ("O preço final da sua compra foi: R$", valor - descontoH)

   outrocaso
       Escreval ("Número inválido!")
       Escreva  ("Escolha entre 1 e 2")
   fimEscolha





fimalgoritmo
