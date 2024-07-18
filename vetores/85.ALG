Algoritmo "85"
var
nome: vetor [1..5] de caractere
sexo: vetor [1..5] de caractere
salario: vetor [1..5] de real
indice: inteiro

Inicio

Para indice de 1 ate 5 Faca
      Escreva("Digite o nome da ", indice, "o. pessoa: ")
      Leia( nome[indice] )
      Escreva("Digite o sexo da ", indice, "o. pessoa (F ou M): ")
      Leia( sexo[indice] )
      Escreva("Digite o salário da ", indice, "o. pessoa: ")
      Leia( salario[indice] )
      
      Escreval(" ")
FimPara

   Escreval("A(s) Funcionária(s) ")
   Para indice de 1 ate 5 Faca
      Se ( salario[indice] > 5000 ) e ( sexo[indice] = "F" )   Entao
         Escreval(nome[indice]," do sexo ",sexo[indice]," ganha mais de R$5000")
      FimSe
   FimPara
FimAlgoritmo

