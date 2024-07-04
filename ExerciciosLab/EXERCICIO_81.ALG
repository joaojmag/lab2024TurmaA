algoritmo "exercicio_81"
var

   idade: vetor[0..8] de inteiro
   cont, maiorIdade: inteiro
   idadeMed: real


inicio


      Para cont de 1 ate 8 faca
           Escreva("DIGITE SUA IDADE: ")
           Leia(idade[cont])
           idadeMed <- idadeMed + idade[cont]
      fimpara

      Escreval("------------------------------------")


      Escreva

      Para cont de 1 ate 8 faca
           Escreva("")
           se (idade[cont] > 25) entao
              Escreval("TEMOS PESSOAS COM MAIS DE 25 ANOS NA POSIÇÃO,", cont)
           fimse
           se (idade[cont] > maiorIdade) entao
              maiorIdade <- idade[cont]
           fimse
      fimpara

      Escreval(idadeMed/cont:3:1, " É A MÉDIA ENTRE AS IDADES DIGITADAS.")
      Escreval(maiorIdade, " FOI A MAIOR IDADE DIGITADA.")

      Escreval("")
      Escreval("")

fimalgoritmo