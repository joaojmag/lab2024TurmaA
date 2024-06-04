Algoritmo "08.4-GUANABARA"

//Aula #08.4 Guanabara "Dependentes Funcionários"

var

   nome: Caracter
   salario, nsal: Real
   dep: Inteiro

inicio

      EscrevaL (" __________________________" )
      EscrevaL ("|                          |")
      EscrevaL ("| Dependentes Funcionários |")
      EscrevaL ("|__________________________|")
      EscrevaL (" ")
      
      EscrevaL (" Qual o Nome do Funcionário? ")
      Leia(nome)
      EscrevaL (" Qual o Salário do Funcionário? R$ ")
      Leia(salario)
      EscrevaL (" Qual é a quantidade de dependentes? ")
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