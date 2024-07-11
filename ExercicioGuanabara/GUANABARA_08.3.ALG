Algoritmo "GUANABARA_08.3"

var

   nome: Caracter
   salario, nsal: Real
   dep: Inteiro

inicio

      EscrevaL ("FUNCIONÁRIOS")
      EscrevaL ("---------------------------------")

      EscrevaL ("Qual o nome do funcionário? ")
      Leia(nome)
      EscrevaL ("Qual o salário do funcionário? R$ ")
      Leia(salario)
      EscrevaL ("Qual é a quantidade de dependentes? ")
      Leia(dep)

      Escolha dep
              Caso 0
                   nsal <-(salario*1.05)
              Caso 1, 2, 3
                    nsal <-(salario*1.10)
              Caso 4, 5, 6
                    nsal <-(salario*1.15)
              OutroCaso
                    nsal <-(salario*1.18)
      FimEscolha

      EscrevaL ("O novo salário de ", nome, ", será de: R$", nsal:5:2)

fimalgoritmo