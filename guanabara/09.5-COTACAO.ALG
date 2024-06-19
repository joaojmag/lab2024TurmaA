Algoritmo "09.5-cotacao"

Var
 contador, vezes: inteiro
 reais, dolar: real

Inicio
      contador <- 1
      escreval ("Vamos converter reais em dólar:")
      escreval ("Quantas vezes você quer converter? ")
      leia (vezes)
      
      enquanto (contador<=vezes) faca
               escreval ("Qual valor em R$? ")
               leia (reais)
               dolar <- reais/5,41
               Escreval ("O valor convertido é: US$",dolar:5:2)
               contador <- contador+ 1
      fimEnquanto

Fimalgoritmo