Algoritmo "semnome"

Var
 idade,alunosTurma: inteiro
 mediaTurma:real

Inicio
 alunosTurma <- 0

Escreval("Digite a idade do aluno (Digite 999 para encerrar): ")


   Enquanto idade <> 999 Faca
   Leia(idade)
      Se idade <> 999 Entao
       alunosTurma <- alunosTurma + 1
      FimSe
      
      Se idade <> 999 Entao
      mediaTurma <- idade / alunosTurma
      FimSe
      
   FimEnquanto
   

   

Escreval("Quantidade de alunos na turma: ",alunosTurma)
Escreval("Média da idade do grupo",mediaTurma)

FimAlgoritmo
