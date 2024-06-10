Algoritmo "10-GUANABARA"

//Aula #10 Guanabara "Contar até onde quiser"

var

   num, soma : Inteiro
   resposta  : Caracter

inicio

      EscrevaL (" _________________________________________" )
      EscrevaL ("|                                         |")
      EscrevaL ("|    Conte até onde Desejar com While     |")
      EscrevaL ("|_________________________________________|")
      EscrevaL (" ")

      soma <- 0
      resposta <- "S"

      Enquanto (resposta = "S") faca

         Escreva(" Insira o Número desejado: ")
         Leia(num)

         soma <- soma + num
         Escreva(" Deseja Continuar? [S/N] ")
         Leia(resposta)

      FimEnquanto
      EscrevaL("")
      EscrevaL(" A Soma dos números informados é:", soma, ".")
      
fimalgoritmo