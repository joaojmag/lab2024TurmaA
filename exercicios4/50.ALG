algoritmo "semnome"
var
contador,numeroSorteado,valor,acima,divisivel:inteiro
inicio
 contador <- 1
 valor <- 20
 acima <- 0
 divisivel <- 0

Enquanto contador <= valor Faca
 Escreva("Seus números sorteados foram: ")
 aleatorio 1,10
 Leia(numeroSorteado)
 
 Se (numeroSorteado > 5)  Entao
  acima <- acima + 1
 FimSe
 
 Se ( numeroSorteado % 3 = 0) Entao
   divisivel <- divisivel + 1
 FimSe
 
 contador <- contador + 1
 
 
FimEnquanto
 
Escreval("Quantidade de números acima de 5: ", acima)
Escreval("Quantidade de números dívisiveis por 3: ", divisivel)
fimalgoritmo