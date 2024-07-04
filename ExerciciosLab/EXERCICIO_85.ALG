algoritmo "exercicio_85"
var

   nome: vetor[0..5] de caractere
   sexo: vetor[0..5] de caractere
   salario: vetor[0..5] de real
   cont: inteiro


inicio

   Escreval("SALÁRIO DOS FUNCIONÁRIOS.")
   Escreval("-----------------------------")

   Para cont de 1 ate 5 faca
        Escreva("DIGITE O NOME: ")
        Leia(nome[cont])

        Escreval("[F] PARA FEMININO.")
        Escreval("[M] PARA MASCULINO.")
        Escreva("DIGITE SEU SEXO: ")
        Leia(sexo[cont])
        
        Escreva("DIGITE SEU SALÁRIO: ")
        Leia(salario[cont])
        Escreval("")

   fimpara

   limpatela

   Escreval("LISTAGEM DAS MULHERES")
   Escreval("QUE RECEBEM MAIS DE 5 MIL.")
   Escreval("-------------------------------")

   Para cont de 1 ate 5 faca
        se (salario[cont] >= 5000) e (sexo[cont] = "F") entao
           EscrevaL("A ", nome[cont], " RECEBE MAIS DE 5MIL: R$", salario[cont])
        fimse
   fimpara


fimalgoritmo