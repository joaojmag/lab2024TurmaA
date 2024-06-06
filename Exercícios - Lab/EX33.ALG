Algoritmo "Ex33"


//33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra
//de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
//em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
//ela não pode exceder 30% do salário ou então o empréstimo será negado.

var

   valorCasa, salCliente, anosPag, pagMensal  :real

inicio

      EscrevaL (" __________________________________" )
      EscrevaL ("|                                  |")
      EscrevaL ("|   Possibilidade de Empréstimo.   |")
      EscrevaL ("|__________________________________|")
      EscrevaL (" ")

      Escreva (" Qual o valor da Casa desejada? ")
      Leia(valorCasa)

      Escreva(" Qual o seu Salário? ")
      Leia(salCliente)

      Escreva(" Pagará em quantos anos? ")
      Leia(anosPag)
      
      pagMensal <- (valorCasa / (anosPag*12) )
      Se ( pagMensal ) < (salCliente*0.30) entao
         EscrevaL(" Você está apto para o empréstimo!")
      
      Senao
           EscrevaL(" Salário insuficiente para realização do empréstimo!")
      FimSe

fimalgoritmo