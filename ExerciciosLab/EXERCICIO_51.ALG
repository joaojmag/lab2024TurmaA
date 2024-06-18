algoritmo "exercicio_51"
var

   cont: inteiro
   produto, menor, maior: real

inicio

      cont <- 1
      Repita
            Escreva("Digite o,", cont, "o. valor do produto: ")
            Leia(produto)
            cont <- cont + 1
      
      se (produto > maior) entao
         maior <- produto
         menor <- maior
      senao
           se (produto < menor) entao
           menor <- produto
           fimse
        fimse
        
      ate (cont=9)
      
      Escreval("")
      Escreval("R$ ", maior:6:2, " é o produto mais caro.")
      Escreval("R$ ", menor:5:2, " é o produto mais barato.")
      

fimalgoritmo