algoritmo "Exer-22"

var
  ano, idade: inteiro

inicio
      Escreval ("Qual sua situação com o alistamento militar:")
      Escreva  ("Qual seu ano de nascimento? ")
      Leia (ano)
      idade <- 2024-ano
      se idade>18 entao
         escreva ("Já se passaram ",idade-18," anos que você se alistou.")
      senao
           se idade=18  entao
             escreva ("Você já pode se alistar")
           senao
             escreva ("Você não pode se alistar, faltam ",18- idade, " anos.")
           fimSe
      fimSe


fimalgoritmo