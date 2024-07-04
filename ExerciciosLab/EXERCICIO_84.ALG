algoritmo "exercicio_84"
var

   nome: vetor[0..9] de caractere
   idade: vetor[0..9] de inteiro
   cont: inteiro


inicio

   Para cont de 1 ate 9 faca
        Escreva("DIGITE O NOME: ")
        Leia(nome[cont])
        
        Escreva("DIGITE A IDADE: ")
        Leia(idade[cont])
        Escreval("")
        
   fimpara
   
   limpatela
   
   Escreval("LISTAGEM DOS MENORES DE IDADE.")
   Escreval("-------------------------------")
   
   Para cont de 1 ate 9 faca
        se (idade[cont] < 18) entao
           EscrevaL("O(a) ", nome[cont], " É MENOR DE IDADE: ", idade[cont], " ANOS.")
        fimse
   fimpara


fimalgoritmo