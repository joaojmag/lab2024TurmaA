Algoritmo "Ex65"

//65) Desenvolva um programa usando a estrutura “para” que mostre na tela a
//seguinte contagem:
//100 90 80 70 60 50 40 30 20 10 0 Acabou!

var
   i : Inteiro


//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ______________________________" )
      EscrevaL ("|                              |")
      EscrevaL ("| Contando de 100 a 0 com Para |")
      EscrevaL ("|______________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para i <- 100 ate 0 passo -10 faca
           Escreva(i)
      FimPara

      Escreva( " " )
      Escreva( " Acabou!" )

fimalgoritmo