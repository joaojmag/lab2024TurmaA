Algoritmo "Ex14"

//14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
//um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
//quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
//sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

Var

      km, aluguel, total : Real

Inicio

      Escreval("___________________________")
      Escreval(" ")
      Escreval("Locadora CARlinho's")
      Escreval("___________________________")
      Escreval(" ")
      
      Escreval("Quantos Km você percorreu com o veículo?")
      Leia(km)
      Escreval("Por quantos dias alugou o veículo?")
      Leia(aluguel)
      
      total <- ( (aluguel*90) + (km*0.20) )

      Escreva("O preço total a ser pago pelo uso do veículo será: R$", total )

Fimalgoritmo
