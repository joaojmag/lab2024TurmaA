Algoritmo "NotasAlunos"

Var
indice: inteiro
nome: vetor[1..10] de caractere
nota: vetor[1..10] de real
mediaTurma: real
maiorNota: real
posicoesMaiorNota: vetor[1..10] de inteiro
numAlunos: inteiro
acimaMedia: inteiro
   somaNotas: real

Inicio

maiorNota <- 0
somaNotas <- 0
numAlunos <- 10
acimaMedia <- 0


Para indice de 1 ate numAlunos faca
      Escreva("Digite o nome do ", indice, "º aluno: ")
      Leia(nome[indice])

      Escreva("Digite a nota do ", indice, "º aluno: ")
      Leia(nota[indice])

      somaNotas <- somaNotas + nota[indice]

      //a maior nota
      Se nota[indice] > maiorNota Entao
         maiorNota <- nota[indice]
         posicoesMaiorNota[1] <- indice
         numAlunos <- 1
      Senao Se nota[indice] = maiorNota Entao
         posicoesMaiorNota[numAlunos] <- indice
         numAlunos <- numAlunos + 1
      FimSe

FimPara

   // média da turma
   mediaTurma <- somaNotas / numAlunos

   // Contagem de alunos acima da média
   Para indice de 1 ate numAlunos faca
      Se nota[indice] > mediaTurma Entao
         acimaMedia <- acimaMedia + 1
      FimSe
   FimPara


   Escreval("A média da turma é de: ", mediaTurma)
   Escreval("Quantidade de alunos acima da média: ", acimaMedia)
   Escreval("Maior nota digitada foi: ", maiorNota)
   Escreval("Posição(ões) em que está(ão) a maior nota: ")
   Para indice de 1 ate numAlunos faca
      Escreva(posicoesMaiorNota[indice], " ")
   FimPara

FimAlgoritmo

