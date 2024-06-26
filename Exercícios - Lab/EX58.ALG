Algoritmo "Ex58"

//58) Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
//vai parar quando for digitada a idade 999. No final, mostre quantos alunos
//existem na turma e qual é a média de idade do grupo.

Var
   idade, alunos : Inteiro
   mediaIdade : Real
   
inicio

      EscrevaL (" _____________________________________" )
      EscrevaL ("|                                     |")
      EscrevaL ("| Idade, média de alunos de uma turma |")
      EscrevaL ("|_____________________________________|")
      EscrevaL (" ")

      Enquanto (idade <> 999) faca

      EscrevaL(" ")
      Escreva("Qual a idade deste Aluno? ")
      Leia(idade)
      
      Se (idade = 999) entao

         EscrevaL("Fim do programa")

      FimSe
      
      alunos <- alunos + 1
      mediaIdade <- mediaIdade + idade

      FimEnquanto
      
      mediaIdade <- mediaIdade - 999
      alunos <- alunos -1
      mediaIdade <- ( mediaIdade / alunos)

      EscrevaL("")
      EscrevaL ( " A quantidade de alunos existentes nesta turma é:", alunos)
      EscrevaL ( " A média de idade entre eles é:", mediaIdade:4:2)

fimalgoritmo