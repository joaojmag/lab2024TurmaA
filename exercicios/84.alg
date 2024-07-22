algoritmo "semnome"
var
idade:vetor[0..9] de inteiro
nome:vetor[0..9] de inteiro
cnt:inteiro
inicio
para cnt de 1 ate 9 faca
   Escreva("digite o nome:")
   Leia(nome[cnt])

   Escreva("digite sua idade:")
   Leia(idade[cnt])
fimpara

para cnt de 1 ate 9 faca
   se (idade[cnt] < 18) entao
      Escreval("a seguinte pessoa é menor de idade ",nome[cnt]," e tem a seguinte idade:",idade[cnt])
   fimse
fimpara
fimalgoritmo
