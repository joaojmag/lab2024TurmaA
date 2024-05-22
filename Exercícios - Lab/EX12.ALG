Algoritmo "Ex12"

//12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
//PREÇO PROMOCIONAL, com 5% de desconto.

Var

      desconto, valor : Real

Inicio

      Escreva("Quanto custa o seu produto?")
      Leia(valor)

      desconto <- (valor * 0.05)
      Escreva("O seu produto na promoção custa: R$", (valor-desconto) )

Fimalgoritmo