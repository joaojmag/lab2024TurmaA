Algoritmo "14.6-GUANABARA"

//Aula #14.6 Guanabara PLUS "Corrigindo Provas"

var
   gab: vetor[1..5] de Caractere
   prova: vetor[1..5] de Caractere
   nome: vetor[1..3] de Caractere
   nota: vetor[1..3] de Real
   soma, mediaTurma, media: Real
   i, cont: Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ______________________" )
      EscrevaL ("|                      |")
      EscrevaL ("| Cadastro de Gabarito |")
      EscrevaL ("|______________________|")
      EscrevaL (" ")

FimProcedimento

//Funções

Funcao RespostaAluno(): Real
Inicio
      media <- 0
      EscrevaL("RESPOSTAS")
      
      Para cont <- 1 ate 5 faca
         Escreva("Questão ", cont, ": ")
         Leia(prova[cont])

         Se (prova[cont] = gab[cont]) entao
            media <- media + 2
         FimSe

      FimPara
      
      Retorne media
      
FimFuncao

Inicio
      NavBar()
      
      Para cont <- 1 ate 5 faca
           Escreva("Questão ", cont, ": ")
           Leia(gab[cont])
      FimPara
      cont <- 1
      
      Para i <- 1 ate 3 faca
      
         LimpaTela
         EscrevaL("----------")
         EscrevaL("ALUNO ", i)
         EscrevaL("----------")
         Escreva("Nome: ")
         Leia(nome[i])
         nota[i] <- RespostaAluno()
         soma <- soma + nota[i]
         
      FimPara
      
      LimpaTela
      EscrevaL("NOTAS FINAIS ")
      EscrevaL("--------------")

      Para i <- 1 ate 3 faca
         EscrevaL(nome[i], nota[i])
      FimPara

      mediaTurma <- soma / 3

      EscrevaL("--------------")
      EscrevaL("Media Turma: ", mediaTurma)
   
fimalgoritmo