Algoritmo "Exer-82"

Var
posicao: vetor[1..10] de inteiro
contador, nota: inteiro
acimaMedia, maiorNota: inteiro
soma, media: real
Inicio
   escreval ("VETORES - ALUNOS")
   para contador de 1 ate 10 faca
      escreva ("Digite a nota do ", contador,"° aluno: ")
      leia (nota)
      posicao[contador] <- nota
      soma <- soma + nota

      se (nota > media) entao
         acimaMedia <- acimaMedia + 1
      fimSe
      
      se (nota > maiorNota) entao
         maiorNota <- nota
      fimSe
   fimPara
   media <- soma / 10
   
   escreval ("_________")
   escreval ("A média da turma é: ", media)
   escreval ("_________")
   escreval (acimaMedia, " alunos estão acima da média.")
   escreval ("_________")
   escreval ("A maior nota digitada foi: ", maiorNota)
   escreval ("_________")

   para contador de 1 ate 10 faca
      se (posicao[contador] = maiorNota) entao
         escreval ("Posição [", contador, "]")
      fimSe
   fimPara

Fimalgoritmo