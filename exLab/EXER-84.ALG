Algoritmo "Exer-84"

Var
posicao: vetor[1..9] de inteiro
posicaoB: vetor[1..9] de caractere
contador, idade, maiorIdade: inteiro
nome: caractere
Inicio
   escreval ("VETORES - MENORES DE IDADE")
   para contador de 1 ate 9 faça
      escreval ("Digite o ", contador, "° nome:")
      leia (nome)
      escreval ("Digite a idade: ")
      leia (idade)
      escreval ("_________________________")
      
      posicao[contador] <- idade
      posicaoB[contador] <- nome
      
      se (idade  > maiorIdade ) entao
         maiorIdade <- idade
      fimSe
   fimPara

   escreval ("_________________________")
   escreval ("As pessoas que são menores de idade são:")

   para contador de 1 ate 9 faça
      se (posicao[contador] < 18) entao
         escreval ()
         escreval (posicaoB[contador], " com ", posicao[contador], " anos")
         escreval ("Posicao[",contador, "]")
         escreval ("_________________________")
      fimSe
   fimPara
   
   escreval("_________________________")
   escreval ("A maior idade digitada foi de ", posicaoB[contador], " com ",  maiorIdade)

   para contador de 1 ate 9 faca
      se (posicao[contador] = maiorIdade) entao
         escreval ("Posição [", contador, "]")
      fimSe
   fimPara

Fimalgoritmo
