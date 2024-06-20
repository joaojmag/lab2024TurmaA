Algoritmo "13.3-GUANABARA"

//Aula #13.3 Guanabara "Fatorial de um número com Guanabara"

var
   num, fatorial : Inteiro


//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________________" )
      EscrevaL ("|                            |")
      EscrevaL ("|  Funçao Fatorial Guanabara |")
      EscrevaL ("|____________________________|")
      EscrevaL (" ")

FimProcedimento

//Funções

Funcao Fatore(x: Inteiro) : Inteiro
var
   i, resul : Inteiro
Inicio
resul:= 1
      Para i <- 1 ate x faca

           resul <- resul * i
      FimPara
      
      Retorne resul
FimFuncao

Inicio
      NavBar()

      Escreva("Digite um Valor: ")
      Leia (num)

      fatorial := Fatore(num)
      EscrevaL(" O fatorial de",num, " é:", fatorial)

fimalgoritmo