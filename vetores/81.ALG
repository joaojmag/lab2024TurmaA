algoritmo "81"
var
nome: vetor[1..8] de caractere
idade: vetor[1..8] de inteiro
somaIdade, nomes, indice, posicao, maiorIdade: inteiro
media: real
entraGeral: logico

inicio
maiorIdade <- 0
somaIdade <- 0
nomes <- 0
entraGeral <- verdadeiro


Para indice <- 1 ate 8 Faca
      Escreva("Digite o nome da ", indice, "o. pessoa: ")
      Leia(nome[indice])
      Escreva("Digite a idade da ", indice, "o. pessoa: ")
      Leia(idade[indice])

      // Verifica maior idade
      Se entraGeral Entao
         maiorIdade <- idade[indice]
         posicao <- indice
         entraGeral <- falso
      Senao
         Se idade[indice] > maiorIdade Entao
            maiorIdade <- idade[indice]
            posicao <- indice
         FimSe
      FimSe

      // Cálculo da média de idades
      somaIdade <- somaIdade + idade[indice]
      nomes <- nomes + 1
FimPara

      media <- somaIdade / nomes

   //resultados
Escreval("Média das idades cadastradas: ", media)

Escreval("Posições em que existe pessoa(s) com mais de 25 anos: ")
Para indice <- 1 ate 8 Faca
      Se idade[indice] > 25 Entao
         Escreva(indice, " ")
      FimSe
FimPara
Escreval()

Escreval("Maior idade digitada: ", maiorIdade)

Escreval("Posição(ões) em que está(ão) a maior idade: ")
Para indice <- 1 ate 8 Faca
      Se idade[indice] = maiorIdade Entao
         Escreva(indice, " ")
      FimSe
FimPara

fimalgoritmo

