Algoritmo "Exer-37"

Var
 salario: real
 anos, genero: inteiro

Inicio
   Escreval ("REAJUSTE SALARIAL")
   Escreval  ("Qual seu salário atual? ")
   leia (salario)
   Escreval  ("Há quantos anos você trabalha na empresa? ")
   leia (anos)
   Escreval ("Qual seu gênero?")
   Escreval ("[ 1 ] Mulher")
   Escreval ("[ 2 ] Homem")
   leia (genero)

   Se (genero=1) ou (genero= 2) entao
      Escolha genero
         caso 1
         Se (anos<=15) entao
            escreva ("Seu salário será: R$",(salario*1.05))
         senao
              se (anos>15) e (anos<=20) entao
                 escreva ("Seu salário será: R$",(salario*1.12))
              senao
                   se (anos<20) entao
                      escreva ("Seu salário será: R$", (salario*1.23))
                   fimse
              fimse
         fimse


         caso 2
         Se (anos<=15) entao
            escreva ("Seu salário será: R$",(salario*1.03))
         senao
              se (anos>15) e (anos<=20) entao
                 escreva ("Seu salário será: R$",(salario*1.13))
              senao
                   se (anos>20) entao
                      escreva ("Seu salário será: R$", (salario*1.25))
                   fimse
              fimse
         fimse
       fimescolha

   Senao
       limpatela
       escreva ("Escolha de gênero inválida")
   fimse


Fimalgoritmo
