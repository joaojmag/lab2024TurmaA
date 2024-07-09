Algoritmo "Ex87"

//87) Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que mostre uma mensagem personalizada, passada como parâmetro. Ex: Ao
//chamar Gerador("Aprendendo Portugol") aparece:
//+-------=======------+
//Aprendendo Portugol
//+-------=======------+

var

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

Procedimento Gerador(fraseParam : Caracter)
Inicio
      EscrevaL("___________________")
      Break()
      EscrevaL(fraseParam)
      EscrevaL("___________________")

FimProcedimento

Inicio
      NavBar()

      Gerador("Aprendendo Portugol")

fimalgoritmo