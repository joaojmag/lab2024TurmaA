algoritmo "exercicio_33"
var

   valor_do_emprestimo, salario, prst_mensal, prst_mensal2: real
   anos: inteiro

inicio

      Escreval("BEM VINDO AO EMPRÉSTIMO BANCÁRIO")
      Escreval("--------------------------------")
      Escreva("QUAL O VALOR DO EMPRÉSTIMO(R$): ")
      Leia(valor_do_emprestimo)
      Escreva("QUAL O SEU SALÁRIO MENSAL(R$): ")
      Leia(salario)
      Escreva("EM QUANTOS ANOS VOCÊ PRETENDE PAGAR O EMPRÉSTIMO: ")
      Leia(anos)
      Escreval("--------------------------------")
      
      prst_mensal <- valor_do_emprestimo/anos
      prst_mensal2 <- prst_mensal/12
      
      
      se (prst_mensal2 > (30/100)*salario) entao
         Escreval("SEU SALÁRIO NÃO CONDIZ COM AS CONDIÇÕES NECESSÁRIAS.")
         Escreval("O EMPRÉSTIMO FOI NEGADO.")
      senao
           Escreval("EMPRESTIMO APROVADO.")
      fimse
      Escreva("--------------------------------")

fimalgoritmo