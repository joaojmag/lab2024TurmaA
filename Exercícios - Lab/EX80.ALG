Algoritmo "Ex80"

//80) Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
//15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
//número (chave) e seu programa deve mostrar em que posições essa chave foi
//encontrada. Mostre também quantas vezes a chave foi sorteada.

var
   val: vetor[1..30] de Inteiro
   i, num, vezesAparece : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _____________________________________" )
      EscrevaL ("|                                     |")
      EscrevaL ("| Veja se seu número aparece no Array |")
      EscrevaL ("|_____________________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()
      vezesAparece <- 0

      Para i <- 1 ate 30 faca
           Aleatorio 1, 15
           Leia(val[i])

      FimPara
      Aleatorio off //As vezes é necessário para parar o aleatório
      
      LimpaTela
      EscrevaL("Digite um número e veja se ele aparece no Vetor")
      Leia(num)
       
      Para i <- 1 ate 30 faca
      
           Se( val[i] = num ) entao
               EscrevaL(num, " é encontrado na posição", i)
               vezesAparece <- vezesAparece + 1
           FimSe
      FimPara
      
      Se (vezesAparece < 2) entao
         Escreva(num, " Foi sorteado", vezesAparece, " vez.")
      Senao
           Escreva(num, " Foi sorteado", vezesAparece, " vezes.")
      FimSE

fimalgoritmo