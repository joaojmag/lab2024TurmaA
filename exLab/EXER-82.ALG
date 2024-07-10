Algoritmo "Exer-82"

Var
posicao: vetor[1..10] de inteiro
contador, nota, acimaMedia: inteiro
soma, media: real
Inicio
   escreval ("VETORES - ALUNOS")
   para contador de 1 ate 10 faca
      escreva ("Digite a nota do ", contador,"° aluno: ")
      leia (nota)
      posicao[contador] <- nota
      soma <- soma + nota
      

      
   fimPara
   media <- soma / 10
   

   
   escreval ("A média da turma é: ", media)
   escreva  (acimaMedia, " alunos estão acima da média.")
   
  //  se (nota > media) entao
         //acimaMedia <- nota
         //acimaMedia < acimaMedia + 1
  //  fimSe

Fimalgoritmo