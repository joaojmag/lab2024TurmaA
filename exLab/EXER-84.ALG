Algoritmo "Exer-84"

Var
posicao: vetor[1..5] de inteiro
posicaoB: vetor[1..5] de caractere
contador, idade: inteiro
nome: caractere
Inicio
   escreval ("VETORES - MENORES")
   para contador de 1 ate 5 faça
      escreval ("Digite o ", contador, "° nome:")
      leia (nome)
      escreval ("Digite a idade: ")
      leia (idade)
      escreval ("_________________________")
      
      posicao[contador] <- idade
      posicaoB[contador] <- nome
      
   fimPara
   escreval ("_________________________")
   escreval ("As pessoas que são menores de idade são:")
   para contador de 1 ate 5 faça
      se (posicao[contador] < 18) entao
         escreval (posicaoB[contador], " com ", posicao[contador], " anos")
         escreval ("Posicao[",contador, "]")
         escreval ("_________________________")
      fimSe

   fimPara

Fimalgoritmo