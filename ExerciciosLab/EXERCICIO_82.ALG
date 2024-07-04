algoritmo "exercicio_82"
var

   nota: vetor[0..10] de inteiro
   cont, maiorNota, acimaDaMedia, abaixoDaMedia: inteiro
   notaMed: real


inicio

      Escreval("TURMA DOS ALUNOS.")
      Escreval("-----------------------------------")

      Para cont de 1 ate 10 faca
           Escreva("DIGITE SUA NOTA: ")
           Leia(nota[cont])
           notaMed <- notaMed + nota[cont]
      fimpara

      Escreval("------------------------------------")
      limpatela

      Escreva

      Para cont de 1 ate 10 faca
           Escreva("")
           se (nota[cont] >= 7) entao
              acimaDaMedia <- acimaDaMedia + 1
           fimse
           
           se (nota[cont] <= 6.9) entao
              abaixoDaMedia <- abaixoDaMedia + 1
           fimse
           
           se (nota[cont] > maiorNota) entao
              maiorNota <- nota[cont]
           fimse
      fimpara

      Escreval(acimaDaMedia, " ALUNOS ESTÃO ACIMA DA MÉDIA.")
      Escreval(abaixoDaMedia, " ALUNOS ESTÃO ABAIXO DA MÉDIA.")
      Escreval(notaMed/cont:3:1, " É A MÉDIA DA TURMA")
      Escreval(maiorNota, " FOI A MAIOR IDADE DIGITADA.")

      Escreval("")
      Escreval("")

fimalgoritmo