Algoritmo "Ex86"

//86) Crie um programa que tenha um procedimento Gerador() que, quando chamado,
//mostre a mensagem "Olá, Mundo!" com algum componente visual (linhas) Ex: Ao
//chamar Gerador() aparece:
//+-------=======------+
//Olá, Mundo!
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

Procedimento Gerador()
Inicio
      EscrevaL("___________________")
      Break()
      EscrevaL("Olá Mundo!")
      EscrevaL("___________________")

FimProcedimento

Inicio
      NavBar()

      Gerador()

fimalgoritmo