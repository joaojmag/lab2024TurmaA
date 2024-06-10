Algoritmo "09.4-GUANABARA"

//Aula #09.4 Guanabara "Ler 10 números e soma-los"

var

   contador, num, soma, maior: Inteiro

inicio

      EscrevaL (" _________________________________________" )
      EscrevaL ("|                                         |")
      EscrevaL ("|   Ler 10 números e soma-los com while   |")
      EscrevaL ("|_________________________________________|")
      EscrevaL (" ")

      contador <- 1
      soma <- 0
      
      Enquanto (contador <= 10 ) faca
      
         Escreva(" Insira o", contador, "º Número: ")
         Leia(num)
         
         contador <- contador + 1
         soma <- soma + num
         
         Se ( num > maior ) entao
            maior <- num
         FimSe
         
      FimEnquanto
      EscrevaL("")
      EscrevaL(" A Soma dos números informados é:", soma, ".")
      EscrevaL(" Sendo:", maior, " O maior deles.")

fimalgoritmo