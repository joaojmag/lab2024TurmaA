Algoritmo "EX91"

//91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Maior() que vai verificar qual deles é o maior e
//mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
//informando essa característica.

var

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _____________________________________" )
      EscrevaL ("|                                     |")
      EscrevaL ("| Ao chamar o Procedimento Maior()... |")
      EscrevaL ("|_____________________________________|")
      Break()

FimProcedimento

Procedimento Maior(num1, num2: Inteiro)
Inicio
      Break()
      EscrevaL( " entre", num1, " e", num2)
      Break()
      
      Se ( num1 > num2 ) entao
         EscrevaL( num1, " é Maior.")
      Senao
      
      Se ( num2 > num1 ) entao
         EscrevaL( num2, " é Maior.")
      FimSe
      
      Se ( num1 = num2 ) entao
         EscrevaL( num1, " e", num2,  " são Iguais.")
      FimSe

      FimSe
      Break()

FimProcedimento

Inicio
      NavBar()

      Maior(7,7)
      Maior(2,5)
      Maior(7,3)

fimalgoritmo