algoritmo "exercicio_29"
var

   nome: caractere
   salario, anos_trabalhados: real

inicio

      Escreval("BE VINDO DE VOLTA À YOUXGROUP")
      Escreval("ESTAMOS COM UMA REDUQUAÇÃO SALARIAL NA EMPRESA.")
      Escreval("----------------------")
      Escreva("NOME DO FUNCIONÁRIO: ")
      Leia(nome)
      Escreva("SALÁRIO ATUAL(R$): ")
      Leia(salario)
      Escreva("QUANTOS O SENHOR(A) TRABALHA NA EMPRESA: ")
      Leia(anos_trabalhados)
      Escreval("----------------------")
      Escreval("PARÁBENS ", nome, "!")
      
      
      
      se (anos_trabalhados < 3) entao
         Escreval("SEU SALÁRIO IRÁ SOFRER UM AUMENTO DE 3%!")
         Escreva("SEU NOVO SALÁRIO SERÁ DE R$", (3/100)*(salario)+salario , "!")
      fimse
      
      se (anos_trabalhados >= 3) e (anos_trabalhados <= 10) entao
         Escreval("SEU SALÁRIO IRÁ SOFRER UM AUMENTO DE 12.5%!")
         Escreva("SEU NOVO SALÁRIO SERÁ DE R$", (12.5/100)*(salario)+salario , "!")
      fimse
      
      se (anos_trabalhados > 10) entao
         Escreval("VOCÊ ESTÁ A TANTO TEMPO NA EMPRESA, SEU SALÁRIO SOFRERÁ UM AUMENTO DE 20%!!")
         Escreva("SEU NOVO SALÁRIO SERÁ DE R$", (20/100)*(salario)+salario , "!")
      fimse

fimalgoritmo