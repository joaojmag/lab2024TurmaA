algoritmo "exercicio_48"
var
   n,cont, s: inteiro
inicio

   s <- 0
   cont <- 1
   Enquanto (cont <= 7) faca
            Escreva("Digite o ", cont, "o. valor: ")
            Leia(n)

            s <- s + n
            cont <- cont + 1
   FimEnquanto
   EscrevaL("")
   Escreva("A soma de todos os valores digitados é", s)

fimalgoritmo