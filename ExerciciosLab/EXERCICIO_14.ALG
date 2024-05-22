algoritmo "exercicio_14"
var
   dias: Inteiro
   quilometros, diaria, km_rodado, total: Real
inicio
      Escreval("AluCAR")
      Escreval("Bem Vindo de volta á AluCAR!")
      Escreva("Quantos quilometros o carro alugado rodou?: ")
      Leia(quilometros)
      Escreva("Quantos dias o carro estava alugado?: ")
      Leia(dias)
      diaria <- 90*dias
      km_rodado <- 0.20*quilometros
      total <- diaria + km_rodado
      Escreval("O valor total do aluguel é R$", total)
      EScreva("Obrigado pela prefêrencia e volte sempre!")
fimalgoritmo