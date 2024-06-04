Algoritmo "Exer-29"

Var
 nome: caractere
 salario: real
 anos: inteiro
Inicio
   Escreval ("Vamos ver os ajustes de seu salário:")
   Escreval  ("Qual seu nome? ")
   leia (nome)
   Escreval  ("Qual seu salário? ")
   leia (salario)
   Escreval  ("Há quantos anos você trabalha na empresa? ")
   leia (anos)

   se (anos<3) entao
      escreva (nome," seu salário será: R$", salario*1.03)
   senao
        se (anos>=3) e (anos<10) entao
           escreva (nome," seu salário será: R$", salario*1.125)
        senao
             escreva (nome," seu salário será: R$", salario*1.2)
        fimSe
   fimSe


Fimalgoritmo