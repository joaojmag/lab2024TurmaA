Algoritmo "09.6-GUANABARA"

//Aula #09.6 Guanabara "Contagem Inteligente"

var

    comeco, final: Inteiro

inicio

      EscrevaL (" __________________________" )
      EscrevaL ("|                          |")
      EscrevaL ("|   Contagem Inteligente   |")
      EscrevaL ("|__________________________|")
      EscrevaL (" ")

      comeco <- 0
      final <- 0
      
      Escreva("Início: ")
      Leia(comeco)
      
      Escreva("Fim:")
      Leia(final)
      
      Se ( comeco > final ) entao
      
         Enquanto (comeco >= final ) faca

         Escreva(comeco)
         comeco <- comeco - 1
         
      FimEnquanto
      
      FimSe
      
      Se ( final > comeco ) entao

         Enquanto (comeco <= final ) faca

         Escreva(comeco)
         comeco <- comeco + 1

      FimEnquanto

      FimSe

fimalgoritmo