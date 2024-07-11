Algoritmo "GUANABARA_06.5"


var

   valor, valorEmprestimo, parcelaDesejada, totalMes: Real

inicio

      Escreva("Qual o valor do empréstimo desejado? ")
      Leia(valor)

      valorEmprestimo <- ( valor * 1.20 )
      Escreval("Após o empréstimo, você terá de pagar: R$", valorEmprestimo, " Deseja parcelar em quantas vezes? ")
      Leia(parcelaDesejada)

      totalMes <- ( valorEmprestimo / parcelaDesejada )
      Escreva("Parcelando em", parcelaDesejada, " Vezes, você terá de pagar: R$", totalMes:5:2, " por mês.")

fimalgoritmo