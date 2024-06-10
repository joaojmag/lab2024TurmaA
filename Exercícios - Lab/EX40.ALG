Algoritmo "Ex40"

//40) Crie um aplicativo que mostre na tela a seguinte
//contagem: 0 3 6 9 12 15 18 Acabou!

Var
   contador: Inteiro

inicio

      EscrevaL (" ___________________________" )
      EscrevaL ("|                           |")
      EscrevaL ("| Contador 0 a 18 de 3 em 3 |")
      EscrevaL ("|___________________________|")
      EscrevaL (" ")

      contador <- 0

      Enquanto (contador <= 18 ) faca
               EscrevaL(contador)
               contador <- contador + 3
      FimEnquanto

      EscrevaL("")
      EscrevaL( " Acabou!" )

fimalgoritmo