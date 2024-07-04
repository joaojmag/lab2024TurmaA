Algoritmo "Ex81"

//81) Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
//final, mostre:
//a) Qual é a média de idade das pessoas cadastradas
//b) Em quais posições temos pessoas com mais de 25 anos
//c) Qual foi a maior idade digitada (podem haver repetições)
//d) Em que posições digitamos a maior idade

var
   val: vetor[0..7] de Inteiro
   i, maior : Inteiro
   media : real

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
      EscrevaL ("| Idade e Média com array de 8 pessoas |")
      EscrevaL ("|______________________________________|")
      Break()

FimProcedimento

Inicio
      NavBar()
      media <- 0
      maior <- 0

      Para i <- 0 ate 7 faca
           Escreva("Digite sua idade: ")
           Leia(val[i])
           media <- media + val[i]

           Se ( val[i] > maior ) entao
              maior <- val[i]
           FimSe
           
      FimPara

      LimpaTela
      NavBar()
      
      media <- media / 8
      EscrevaL("A média das Idades cadastradas é: ", media:4:1)
      Break()
      
      EscrevaL("Idades Maiores que 25 anos estão nas posições:")

      Para i <- 0 ate 7 faca

           Se( val[i] >= 26 ) entao
               EscrevaL(val[i], " é encontrado na posição", i)
           FimSe
      FimPara
      Break()
      
      EscrevaL("A maior idade digitada é: ", maior)
      Break()
      
      EscrevaL("A maior idade aparece nas seguintes posições: ")
      
      Para i <- 0 ate 7 faca
         Se(val[i] = maior)entao
            Escreval("Na posição ", i, " foi digitada a maior idade")
         FimSe
      FimPara

fimalgoritmo