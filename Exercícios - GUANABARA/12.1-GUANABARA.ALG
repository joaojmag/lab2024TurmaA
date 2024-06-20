Algoritmo "12.1-GUANABARA"

//Aula #12.1 Guanabara "Par ou Impar Procedimento"

var
   num: Inteiro
   
//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________________" )
      EscrevaL ("|                            |")
      EscrevaL ("| Par ou Impar Procedimento  |")
      EscrevaL ("|____________________________|")
      EscrevaL (" ")

FimProcedimento

Procedimento ParOuImpar(num: Inteiro)
Inicio
      NavBar()
      Se (num % 2 = 0 ) entao
         EscrevaL (" O número",num, " é PAR.")
      Senao
         EscrevaL (" O número",num, " é IMPAR.")
      FimSe

FimProcedimento

Inicio
      NavBar()
      Escreva("Digite um número: ")
      Leia(num)
      ParOuImpar(num)

fimalgoritmo