Algoritmo "Ex41"

//41) Desenvolva um programa que mostre na tela a seguinte
//contagem: 100 95 90 85 80 ... 0 Acabou!

Var
   contador: Inteiro

inicio

      EscrevaL (" ____________________________" )
      EscrevaL ("|                            |")
      EscrevaL ("| Contador 100 a 0 de 5 em 5 |")
      EscrevaL ("|____________________________|")
      EscrevaL (" ")

      contador <- 100

      Enquanto (contador >= 0 ) faca
               EscrevaL(contador)
               contador <- contador - 5
      FimEnquanto

      EscrevaL("")
      EscrevaL( " Acabou!" )

fimalgoritmo