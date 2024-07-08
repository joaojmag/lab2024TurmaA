Algoritmo "Exer-77"

Var
contador: inteiro
posicao: vetor[1..7] de caractere
Inicio
   escreval ("VETORES - NOMES")
   para contador de 1 ate 7 faca
      escreval ("Escreva o ", contador, "° nome: ")
      leia (posicao[contador])
   fimPara
  limpaTela
   escreval ("A ordem contraria dos nomes é: ")
   
   para contador de 7 ate 1 passo -1 faca
      escreval (posicao[contador])
   fimPara


Fimalgoritmo