Algoritmo "06.5-GUANABARA"

//Aula #06.5 Guanabara "Creuza quer saber em quantas parcelas pagará no empréstimo"


var

   valorSolicitado, valorEmprestimo, parcelaDesejada, totalMes: Real

inicio

      Escreva("Qual o valor do empréstimo desejado? ")
      Leia(valorSolicitado)

      valorEmprestimo <- ( valorSolicitado * 1.20 )
      Escreval("Após o empréstimo, você terá de pagar: R$", valorEmprestimo, " Deseja parcelar em quantas vezes? ")
      Leia(parcelaDesejada)
      
      totalMes <- ( valorEmprestimo / parcelaDesejada )
      Escreva("Parcelando em", parcelaDesejada, " Vezes, você terá de pagar: R$", totalMes:5:2, " por mês.")

fimalgoritmo