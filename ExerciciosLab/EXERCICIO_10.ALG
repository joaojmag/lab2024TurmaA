algoritmo "exercicio_10"
var
   largura, altura, area, litros: Real
inicio
      Escreva("Qual a altura da parede? ")
      leia(altura)
      Escreva("Qual a largura da parede? ")
      Leia(largura)
      area <- altura*largura
      litros <- area/2
      Escreva("A área total da parede a ser pintada é", area, "m e a quantidade de litros necessário para pinta-lá é", litros, " litros")
fimalgoritmo