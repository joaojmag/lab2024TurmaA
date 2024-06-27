Algoritmo "Ex61"

//61) Crie um programa que mostre na tela a seguinte contagem, usando a estrutura
//“faça enquanto”
//0 3 6 9 12 15 18 21 24 27 30 Acabou!

Var
   cont : Inteiro

inicio

      EscrevaL (" _________________________________" )
      EscrevaL ("|                                 |")
      EscrevaL ("| Contagem de 0 a 30 com enquanto |")
      EscrevaL ("|_________________________________|")
      EscrevaL (" ")

      Enquanto ( cont < 31 ) faca
      
      Escreva (cont)
      cont <- cont + 3
      
      FimEnquanto
      
      Escreva(" Acabou!" )
      EscrevaL("")
      
fimalgoritmo