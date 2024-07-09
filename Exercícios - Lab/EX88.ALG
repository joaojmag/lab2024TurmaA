Algoritmo "Ex88"

//88) Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que mostre uma mensagem vário
//Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
//+-------=======------+
//Aprendendo Portugol
//Aprendendo Portugol
//Aprendendo Portugol
//Aprendendo Portugol
//+-------=======------+

var
   i : Inteiro

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
      EscrevaL ("| Ao chamar o Procedimento Gerador()... |")
      EscrevaL ("|_______________________________________|")
      Break()

FimProcedimento

Procedimento Gerador(fraseParam : Caracter; vezes: Inteiro)
Inicio

      EscrevaL("___________________")
      
      Break()
      Para i <- 1 ate vezes Faca
           EscrevaL(fraseParam)
      FimPara
      
      EscrevaL("___________________")


FimProcedimento

Inicio
      NavBar()

      Gerador("Aprendendo Portugol", 4)

fimalgoritmo