Algoritmo "06.4-GUANABARA"

//Aula #06.4 Guanabara "Creuza quer saber quanto pagará de imposto ao retornar dos EUA"


var

   preco, imposto: Real

inicio

      Escreva("Qual o preço do produto comprado? US$: ")
      Leia(preco)

      imposto <- ( ( preco * 60 ) / 100 )
      Escreval("O imposto será de US$", imposto:5:2)
fimalgoritmo
