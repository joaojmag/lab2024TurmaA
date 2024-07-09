Algoritmo "EX89"

//89) Crie um programa que melhore o procedimento Gerador() da questão anterior
//para que o programador possa escolher uma entre três bordas:
//+-------=======------+ Borda 1
//~~~~~~~~:::::::~~~~~~~ Borda 2
//<<<<<<<<------->>>>>>> Borda 3
//Ex: Uma chamada válida seria Gerador("Portugol Studio", 3, 2)
//~~~~~~~~:::::::~~~~~~~
//Portugol Studio
//Portugol Studio
//Portugol Studio
//~~~~~~~~:::::::~~~~~~~

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

Procedimento Gerador(fraseParam : Caracter; vezes, borda: Inteiro)
Inicio

      Escolha borda

      Caso 1
           EscrevaL("+-------=======------+")
      Caso 2
           EscrevaL("~~~~~~~~:::::::~~~~~~~")
      Caso 3
           EscrevaL("<<<<<<<<------->>>>>>>")
           
      FimEscolha
      
      Break()
      Para i <- 1 ate vezes Faca
           EscrevaL(fraseParam)
      FimPara
      Break()
      
      Escolha borda

      Caso 1
           EscrevaL("+-------=======------+")
      Caso 2
           EscrevaL("~~~~~~~~:::::::~~~~~~~")
      Caso 3
           EscrevaL("<<<<<<<<------->>>>>>>")

      FimEscolha

FimProcedimento

Inicio
      NavBar()

      Gerador("Portugol Studio", 3, 2)

fimalgoritmo