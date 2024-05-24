Algoritmo "Ex10"

//10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
//mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
//sabendo que cada litro de tinta pinta uma área de 2metros quadrados

Var

      area, largura, altura, litros : Real

Inicio

      Escreva("Qual a Largura de sua parede? ")
      Leia(largura)
      Escreva("Qual a Altura de sua parede? ")
      Leia(altura)
      
      area <- (largura * altura)
      litros <- (area/2)
      
      Escreva("A área de sua parede é de:", area, " m²")
      Escreva("Você irá precisar de:", litros, " Litros de Tinta.")

Fimalgoritmo
