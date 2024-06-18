Algoritmo "Ex51"

//51) Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
//qual foi o maior e qual foi o menor preço digitados.

var
   contador: Inteiro
   produto, menor, maior: Real

inicio

      EscrevaL (" _________________________________________" )
      EscrevaL ("|                                         |")
      EscrevaL ("|  Leia 8 Produtos e Mencione seu Preço   |")
      EscrevaL ("|_________________________________________|")
      EscrevaL (" ")

      contador <- 1

      Enquanto (contador <= 8 ) faca

         Escreva(" Insira o", contador, "º Produto: ")
         Leia(produto)

         contador <- contador + 1

         Se ( produto > maior ) entao
            maior <- produto
            menor <- maior

         Senao
              Se ( produto < menor ) entao
              menor <- produto
              
              FimSe
         FimSe

      FimEnquanto

      EscrevaL("")
      EscrevaL(" R$ ", maior:6:2, " É o produto mais caro.")
      EscrevaL(" R$", menor:5:2, " É o produto mais barato.")

fimalgoritmo