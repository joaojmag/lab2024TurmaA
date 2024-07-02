Algoritmo "14-GUANABARA"

//Aula #14 Guanabara "Valores Pares"

var
   val: vetor[1..7] de Inteiro
   i, numsPar: Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _______________________" )
      EscrevaL ("|                       |")
      EscrevaL ("| Verificador de Nº Par |")
      EscrevaL ("|_______________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()
      numsPar <- 0
      
      Para i <- 1 ate 7 faca
           Escreva("Digite o", i, "º Valor: ")
           Leia(val[i])
           
           Se ( val[i] % 2 = 0 ) entao
              numsPar <- numsPar + 1
           FimSe
      FimPara
      
      EscrevaL(" ")
      EscrevaL("O total de pares foi", numsPar)

fimalgoritmo