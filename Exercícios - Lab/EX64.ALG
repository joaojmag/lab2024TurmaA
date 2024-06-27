Algoritmo "Ex64"

//64) Desenvolva um programa usando a estrutura “para” que mostre na tela a
//seguinte contagem:
//0 5 10 15 20 25 30 35 40 Acabou!

var
   i : Inteiro


//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _____________________________" )
      EscrevaL ("|                             |")
      EscrevaL ("| Contando de o a 40 com Para |")
      EscrevaL ("|_____________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para i <- 0 ate 40 passo 5 faca
           Escreva(i)
      FimPara
      
      Escreva( " Acabou!" )

fimalgoritmo