Algoritmo "Ex9"

//9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
//e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45..

Var

      Dolar, Num : Real

Inicio

      Escreva("Quantos R$ Você tem em sua carteira agora? ")
      Leia(Num)
      
      Dolar <- (Num/3.45)
      
      Escreval("Com R$", Num, " Você consegue comprar: $", Dolar:6:2)

Fimalgoritmo