Algoritmo "Exer-50"

Var
  sorteio, contador, maior, divisivel: inteiro

Inicio
   contador <- 1
   escreval ("VAMOS FAZER UM SORTEIO")

   enquanto (contador<=20) faca
      escreva (contador, "° número sorteado: ")
      aleatorio 0, 10
      leia (sorteio)
      aleatorio off
      contador <- contador +1
      
      se (sorteio> 5) entao
         maior<- maior +1
      fimSe
      
      se (sorteio % 3=0) e (sorteio<>0) entao
         divisivel <- divisivel + 1
      fimSe
   fimEnquanto

   escreval ("Quantidade de números sorteados maiores que 5: ", maior)
   escreva ("Quantidade de números sorteados divisíveis por 3: ", divisivel)
   
   Escreva ("Acabou!")

Fimalgoritmo