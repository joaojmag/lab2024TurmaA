Algoritmo "Ex84"

//84) Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
//valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
//contendo apenas os dados das pessoas menores de idade.

var
   idade: vetor[0..8] de Inteiro
   nome: vetor[0..8] de Caracter
   i : Inteiro

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ______________________________________" )
      EscrevaL ("|                                      |")
      EscrevaL ("|  Idade Nome com array de 9  Pessoas  |")
      EscrevaL ("|______________________________________|")
      Break()

FimProcedimento

Inicio
      NavBar()

      Para i <- 0 ate 8 faca
           Escreva("Digite o nome da pessoa", i+1, ": ")
           Leia(nome[i])
           
           Escreva("Digite a idade da pessoa", i+1, ": ")
           Leia(idade[i])

           Break()
           
      FimPara

      LimpaTela
      NavBar()

      EscrevaL("Listagem das Pessoas")

      Para i <- 0 ate 8 faca
         Se(idade[i] < 18 )entao
            EscrevaL(nome[i]," - ", idade[i], " Anos.")
         FimSe
      FimPara

fimalgoritmo