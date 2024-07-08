Algoritmo "Exer-81"

Var
posicao: vetor[1..8]  de inteiro
contador, idade, soma, maiorIdade: inteiro
media: real
Inicio

   escreval ("VETORES - IDADE ")

   para contador de 1 ate 8 faca
      escreval ("Digite a ", contador, "° idade: ")
      leia (idade)

      posicao[contador] <- idade
      soma <- soma + idade

      se (contador = 1 ) entao
         maiorIdade <- idade
      fimSe
      
      se (idade  > maiorIdade ) entao
         maiorIdade <- idade
      fimSe
   fimPara
   media <- soma / 8

   escreval ("_________")
   escreval ("A média das idades é: ", media:5:2)
   escreval ("________")
   escreval ("Posiçoes que temos pessoas com mais de 25 anos: ")

   para contador de 1 ate 8 faca
      se (posicao[contador] >= 25 ) entao
         escreval ("Posicao [", contador, "]")
      fimSe
   fimPara
   
   escreval ("_________")
         escreval ("A maior idade digitada foi: ", maiorIdade)
   para contador de 1 ate 8 faca
      se (posicao[contador] = maiorIdade) entao
         escreval ("Posição [", contador, "]")
      fimSe
   fimPara
   

Fimalgoritmo