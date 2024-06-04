algoritmo "exercicio_28"
var

   largura, comprimento, area: real

inicio

      Escreval("VAMOS ANALISAR O TERRENO E CLASSIFICÁ-LO.")
      Escreva("PRIMEIRO INFORME A LARGURA DO TERRENO(M): ")
      Leia(largura)
      Escreva("AGORA O COMPRIMENTO(M): ")
      Leia(comprimento)
      
      area <- (largura*comprimento)
      
      se (area <= 99) entao
        Escreval("VOCÊ TEM UM TERRENO BEM RAZOAVEL.")
        Escreva("SEU TERRENO DE", area, "m² É UM TERRENO POPULAR.")
      fimse
      
      se (area >= 100) e (area <= 499) entao
        Escreval("VOCÊ TEM UM TERRENO MUITO BOM.")
        Escreva("SEU TERRENO DE", area, "m² É UM TERRENO MASTER.")
      fimse
         
      se (area >= 500) entao
        Escreval("SEU TERRENO É O MELHOR QUE TEM!")
        Escreva("SEU TERRENO DE", area, "m² É UM TERRENO VIP.")
      fimse

fimalgoritmo
