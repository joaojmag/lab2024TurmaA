Algoritmo "Ex48"

//48) Faça um programa que leia 7 números inteiros e no final mostre o somatório
//entre eles.

Var
   contador, num, soma: Inteiro
   
inicio

      EscrevaL (" _________________________________________" )
      EscrevaL ("|                                         |")
      EscrevaL ("|   Digite 7 números para serem somados   |")
      EscrevaL ("|_________________________________________|")

      EscrevaL (" ")

      contador <- 1
      soma <- 0

      Enquanto (contador <= 7 ) faca

         Escreva(" Insira o", contador, "º Número: ")
         Leia(num)
         
         contador <- contador + 1
         soma <- soma + num

      FimEnquanto

      EscrevaL("")
      EscrevaL(" A Soma dos números informados é:", soma, ".")

fimalgoritmo