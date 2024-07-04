Algoritmo "Ex82"

//82) Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
//um vetor. No final, mostre:
//a) Qual é a média da turma
//b) Quantos alunos estão acima da média da turma
//c) Qual foi a maior nota digitada
//d) Em que posições a maior nota aparece
// Média = 6

var
   nota: vetor[0..9] de Real
   i, corte : Inteiro
   media, maior : real

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
      EscrevaL ("| Nota e Média com array de 10 Alunos  |")
      EscrevaL ("|______________________________________|")
      Break()

FimProcedimento

Inicio
      NavBar()
      media <- 0
      maior <- 0
      corte <- 0

      Para i <- 0 ate 9 faca
           Escreva("Digite a nota do aluno", i, ": ")
           Leia(nota[i])
           media <- media + nota[i]

           Se ( nota[i] > maior ) entao
              maior <- nota[i]
           FimSe
           
           Se ( nota[i] >= 6.1 ) entao
              corte <- corte + 1
           FimSe

      FimPara

      LimpaTela
      NavBar()

      media <- media / 10
      EscrevaL("A média das Idades cadastradas é: ", media:4:1)
      Break()
      
      EscrevaL("A quantidade de Alunos acima da média é: ", corte)
      Break()

      EscrevaL("A maior nota digitada é: ", maior)
      Break()

      Para i <- 0 ate 9 faca
         Se(nota[i] = maior)entao
            Escreval("Na posição ", i, " foi digitada a maior nota")
         FimSe
      FimPara

fimalgoritmo