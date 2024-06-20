Algoritmo "13.2-GUANABARA"

//Aula #13.2 Guanabara "Par ou Ímpar com Função Guanabara"

var
   num : Inteiro
   resp : Caracter

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________________" )
      EscrevaL ("|                            |")
      EscrevaL ("| Funçao Par Ímpar Guanabara |")
      EscrevaL ("|____________________________|")
      EscrevaL (" ")

FimProcedimento

//Funções

Funcao ParouImpar(x: Inteiro) : Caracter
Inicio
      Se ( x % 2 = 0) entao
      
         Retorne (" é Par.")
      Senao
           Retorne (" é Ímpar.")
      FimSe

FimFuncao

Inicio
      NavBar()

      Escreva("Digite um Valor: ")
      Leia (num)

      Resp := ParOuImpar(num)
      EscrevaL(num, Resp)

fimalgoritmo