Algoritmo "14.2-GUANABARA"

//Aula #14.2 Guanabara "Listagem de Turma"

var
   nome: vetor[1..4] de Caracter
   nota1: vetor[1..4] de Real
   nota2: vetor[1..4] de Real
   media: vetor[1..4] de Real
   somaMedia, mediaTurma : Real
   i, acimaMedia: Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ___________________" )
      EscrevaL ("|                   |")
      EscrevaL ("| Listagem de Turma |")
      EscrevaL ("|___________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()
      
      Para i <- 1 ate 4 faca
      
           EscrevaL ("Aluno(a)", i)
           Escreva ("Nome: ")
           Leia(nome[i])
           
           Escreva ("Primeira Nota: ")
           Leia(nota1[i])
           
           Escreva ("Segunda Nota: ")
           Leia(nota2[i])
           
           media[i] <- ( nota1[i] + nota2[i] ) /2
           somaMedia <- somaMedia + media[i]
           
      FimPara
      
      mediaTurma <- somaMedia /4
      
      LimpaTela
      EscrevaL ("LISTAGEM DE ALUNOS")
      EscrevaL ("------------------")
      
      Para i <- 1 ate 4 faca
      
           EscrevaL (nome[i]:12, media[i]:4:1)
           
           Se ( media[i] > mediaTurma ) entao
              acimaMedia <- acimaMedia + 1
           FimSe
           
      FimPara
      
      EscrevaL(" ")
      EscrevaL("Ao todo", acimaMedia, " Alunos estão acima da média da turma que é", mediaTurma:4:1)

fimalgoritmo