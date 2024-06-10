Algoritmo "Ex39"

//39) Faça um algoritmo que mostre na tela a seguinte contagem:
//10 9 8 7 6 5 4 3 Acabou!

Var
   contador: Inteiro

inicio

      EscrevaL (" ___________________________" )
      EscrevaL ("|                           |")
      EscrevaL ("| Contador 10 a 3 com While |")
      EscrevaL ("|___________________________|")
      EscrevaL (" ")

      contador <- 10

      Enquanto (contador >= 3 ) faca
               EscrevaL(contador)
               contador <- contador - 1
      FimEnquanto

      EscrevaL("")
      EscrevaL( "Acabou!" )

fimalgoritmo