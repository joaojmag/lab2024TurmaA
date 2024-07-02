algoritmo "exercicio_77"
var

   nome: vetor[0..10] de caractere
   cont: inteiro

inicio

      Para cont de 1 ate 10 faca
           Escreva("DIGITE O", cont, "o. NOME: ")
           Leia(nome[cont])
      fimpara
      
      Para cont de 10 ate 1 passo -1 faca
           Escreval(" [", nome[cont], " ]")
      fimpara

fimalgoritmo