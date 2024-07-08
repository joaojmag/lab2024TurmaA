Algoritmo "Progressão Aritmética"

var
   primeiroTermo, razao, termo, soma: inteiro
   contador: inteiro

inicio
   escreval("Digite o primeiro termo da PA: ")
   leia(primeiroTermo)

   escreval("Digite a razão da PA: ")
   leia(razao)

   soma <- 0

   // Mostra os 10 primeiros termos da PA
   para contador <- 1 ate 10 faca
      termo <- primeiroTermo + (contador - 1) * razao
      escreval("Termo ", contador, ": ", termo, "\n")
      soma <- soma + termo
   fimpara

   escreval("Soma de todos os termos da PA: ", soma)

fimalgoritmo

