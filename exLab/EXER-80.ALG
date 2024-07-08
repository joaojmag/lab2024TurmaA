Algoritmo "Exer-80"

Var
posicao: vetor[1..30] de inteiro
contador, sorteio, valor, foiSorteado: inteiro
Inicio
   escreval ("VETORES - SORTEIO")
   para contador de 1 ate 30 faca
      sorteio <- (randi(15)+1)
      posicao[contador] <- sorteio
   fimPara
   escreva ("Digite um valor entre 1 e 15: ")
   leia (valor)
   
   escreval ()

   para contador de 1 ate 30 faca
      se (posicao[contador] = valor) entao
            escreval ("O valor aparece na posicao: ", contador)
            foiSorteado <- foiSorteado + 1
      fimSe
   fimPara


   escreval ()
   se (foiSorteado <> 0 ) entao
      escreval ("Foi sorteado", foiSorteado, " vezes")
   fimSe
Fimalgoritmo