algoritmo "semnome"

var

numero,sorteio,sortear,tentativa:inteiro

inicio

sorteio <- randi(11)

tentativa <- 4


Escreval("BEM VINDO AO AKINATOR DA SHOPEE, ESCOLHA UM NUMERO DE 1 A 10")
Escreval("===============================================================")

enquanto (tentativa > 0 ) faca
   Escreva("TESTE SUA SORTE:")
   Leia(numero)
   

   se (numero = sorteio) entao
      Escreva("PARABENS, VOCÊ ACERTOU, O NUMERO ERA ",sorteio)
      tentativa <- -1
   senao
      tentativa <- tentativa - 1
      Escreval("VOCÊ ERROU, TENTE NOVAMENTE!")

   fimse

fimenquanto

//limpatela
      se(tentativa = 0) entao
      Escreval("INFELIZMENTE VOCÊ NÃO CONSEGUIU ACERTAR O NUMERO ",sorteio)
fimse
fimalgoritmo
