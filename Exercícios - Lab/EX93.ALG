Algoritmo "EX93"

//93) Faça um programa que tenha um procedimento chamado Contador() que recebe
//três valores como parâmetro: o início, o fim e o incremento de uma contagem.
//O programa principal deve solicitar a digitação desses valores e passá-los ao
//procedimento, que vai mostrar a contagem na tela.

//Ex: Para os valores de início (4), fim (20) e incremento(3) teremos
//Contador(4, 20, 3) vai mostrar na tela 4 >> 7 >> 10 >> 13 >> 16 >> 19 >>
//FIM

var
   i: Inteiro

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ________________________________________" )
      EscrevaL ("|                                        |")
      EscrevaL ("| Ao chamar o Procedimento Contador()... |")
      EscrevaL ("|________________________________________|")
      Break()

FimProcedimento

Procedimento Contador(comeco, fim, incremento : Inteiro)
Inicio
      Para i <- comeco ate fim passo incremento Faca
           Escreva(i, " >> ")
      FimPara
      
      Escreva ( "FIM" )
      Break()
      
FimProcedimento

Inicio
      NavBar()

      //1º Inicio, 2º Fim, 3º Incremento"
      Contador(0,100,10)

fimalgoritmo