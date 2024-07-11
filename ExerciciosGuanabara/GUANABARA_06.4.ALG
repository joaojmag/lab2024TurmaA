Algoritmo "GUANABARA_06.4"


var

   preco, imposto: Real

inicio

      Escreva("Qual o preço do produto comprado? US$: ")
      Leia(preco)

      imposto <- ((preco * 60)/100)
      Escreval("O imposto será de US$", imposto:5:2)
      
fimalgoritmo