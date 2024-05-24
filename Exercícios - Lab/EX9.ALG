Algoritmo "Ex9"

//9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
//e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45..

Var

      dolar, num : Real

Inicio

      Escreva("Quantos R$ Você tem em sua carteira agora? ")
      Leia(num)
      
      dolar <- (num/3.45)
      
      Escreval("Com R$", num, " Você consegue comprar: $", dolar:6:2)

Fimalgoritmo
