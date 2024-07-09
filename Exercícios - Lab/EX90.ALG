Algoritmo "EX90"

//90) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
//valores para um procedimento Somador() que vai calcular e mostrar a soma entre
//eles.

vars
   soma : Inteiro

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _______________________________________" )
      EscrevaL ("|                                       |")
      EscrevaL ("| Ao chamar o Procedimento Somador()... |")
      EscrevaL ("|_______________________________________|")
      Break()

FimProcedimento

Procedimento Somador(num1, num2: Inteiro)
Inicio
      soma <- ( num1 + num2 )
      
      EscrevaL("A soma entre: ", num1, " +", num2, " é", soma)


FimProcedimento

Inicio
      NavBar()

      Somador(3,7)

fimalgoritmo