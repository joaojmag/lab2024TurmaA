contador:inteiro
inicio
Escreval("bem vindo ao mercadinho do Bryan!")
Escreval("=================================")

contador <- 1
maior <- preco


enquanto (contador <= 8) faca
   Escreva("diga o preço do produto ",contador,":")
   Leia(preco)
   
   contador <- contador + 1

   se ( preco > maior) entao
      maior <-preco

   senao
      se(preco < menor) entao
         menor <- preco
      fimse
   fimse
fimenquanto

Escreval("o maior produto é:",maior)
Escreva("o menor produto é:",menor)
fimalgoritmo
