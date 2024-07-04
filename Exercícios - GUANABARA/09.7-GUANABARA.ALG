Algoritmo "09.7-GUANABARA"

//Aula #09.7 Guanabara "Melhor Aluno"

var

    i, alunos, nota, maior: Inteiro
    nome, maiorNota: Caracter

inicio

      EscrevaL (" __________________________" )
      EscrevaL ("|                          |")
      EscrevaL ("|   Escolinha do Cleytin   |")
      EscrevaL ("|__________________________|")
      EscrevaL (" ")

      alunos <- 0
      maior <- 0
      nota <- 0

      Escreva("Quantos alunos a turma têm? ")
      Leia(alunos)

      Para i <- 1 ate alunos faca
      
         EscrevaL("Aluno", i)

         Escreva("Nome do Aluno: ")
         Leia(nome)

         Escreva("Nota de: ", nome, ": ")
         Leia(nota)

         Se ( nota > maior ) entao
             maior <- nota
             maiorNota <- nome
         FimSe
      
      FimPara
      
      EscrevaL("O Aluno com a maior nota é o: ", maiorNota, " com ", maior:2:1)

fimalgoritmo