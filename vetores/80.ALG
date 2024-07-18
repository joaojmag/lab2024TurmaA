algoritmo "80"

var
valores: vetor[1..30] de inteiro
indice,numero, chave, repeticoes: inteiro


inicio
repeticoes <- 0

Escreval("SEJA BEM-VINDO AO NOSSO SORTEIO")

Para indice de 1 ate 30 faca
   valores[indice ] <- randi( 15 )+1
FimPara

Escreval( "Números sorteados: " )
    
Para indice de 1 ate 30 faca
   Escreva( valores[indice], " ")
FimPara
Escreval("")

    
Escreval(" Digite um número para buscar no sorteio: ")
Leia(chave)

Para indice de 1 ate 30 faca
   Se valores[indice] = chave entao
      repeticoes <- repeticoes + 1
      Escreval( "A chave ", chave, " foi encontrada na posição ", indice )
   FimSe
FimPara
Escreval( "A chave ", chave, " foi sorteada ", repeticoes, " vezes." )

fimalgoritmo

