algoritmo "exercicio_37"
var

   nome, sexo: caractere
   salario: real
   anos: inteiro

inicio

      Escreval("BEM VINDO DE VOLTA Á EMPRESA.")
      Escreval("-----------------------------")
      Escreval("ESTAMOS COM UM REAJUSTE SALARIAL COM NOSSOS FUNCIONÁRIOS.")
      Escreval("-----------------------------")
      Escreva("NOME DO FUNCIONÁRIO(A): ")
      Leia(nome)
      
      Escreval("-----------------------------")
      Escreval("SELECIONE 'M' PARA MASCULINO.")
      Escreval("SELECIONE 'F' PARA FEMININO.")
      Escreva("SEXO: ")
      Leia(sexo)
      
      Escreval("-----------------------------")
      Escreva("QUAL SEU SALÁRIO ATUAL NA EMPRESA (R$): ")
      Leia(salario)
      
      Escreval("-----------------------------")
      Escreva("HÁ QUANTOS ANOS VOCÊ TRABALHA AQUI NA EMPRESA: ")
      Leia(anos)
      
      Escreval("-----------------------------")
      Escreval("PARÁBENS, ", nome, "!")
      Escreval("VOCÊ ESTÁ HÁ", anos, " ANOS NA EMPRESA.")
      Escreval(" ")
      
      se (sexo = "F") ou (sexo = "f") e (anos < 15) entao
         Escreval("SEU SALÁRIO SOFRERÁ UM AUMENTO DE 5%!!")
         Escreval("SEU NOVO SALÁRIO SERÁ DE R$", (salario*(5/100))+salario)
           senao
             se (sexo = "F") ou (sexo = "f") e (anos >= 15) entao
                Escreval("SEU SALÁRIO SOFRERÁ UM AUMENTO DE 12%!")
                Escreval("SEU NOVO SALÁRIO SERÁ DE R$", (salario*(12/100))+salario)
                  senao
                    se (sexo = "F") ou (sexo = "f") e (anos >= 20) entao
                       Escreval("SEU NOVO SALÁRIO SOFRERÁ UM AUMENTO DE 23%")
                       Escreval("SEU NOVO SALÁRIO SERÁ DE R$", (salario*(23/100))+salario)
                  fimse
             fimse
         fimse
      
      
      se (sexo = "M") ou (sexo = "m") e (anos < 20) entao
         Escreval("SEU NOVO SALÁRIO SOFRERÁ UM AUMENTO DE 3%!")
         Escreval("SEU NOVO SALÁRIO SERÁ DE R$", (salario*(3/100))+salario)
           senao
             se (sexo = "M") ou (sexo = "m") e (anos >= 20) e (anos < 30) entao
                Escreval("SEU NOVO SALÁRIO SOFRERÁ UM AUMENTO DE 13%!")
                Escreval("SEU NOVO SALÁRIO SERÁ DE R$", (salario*(13/100))+salario)
                  senao
                    se (sexo = "M") ou (sexo = "m") e (anos >= 30) entao
                       Escreval("SEU SALÁRIO SOFRERÁ UM AUMENTO DE 25%!")
                       Escreval("SEU NOVO SALÁRIO SERÁ DE R$", (salario*(25/100))+salario)
                  fimse
             fimse
         fimse
      
      Escreval("-----------------------------")
      
      

fimalgoritmo