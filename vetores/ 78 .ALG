algoritmo " 78 "
var
valores:vetor[1..15] de inteiro
contador,multiplos:inteiro
inicio
multiplos <- 0

Para contador <- 1 ate 15 Faca
   Escreval( "Digite o",contador,"o. valor: " )
   Leia( valores [ contador ] )
   Se ( valores [ contador ] % 10 = 0 )Entao
      multiplos <- multiplos + 1
   FimSe
FimPara

Para contador <- 1 ate 15 Faca
   Se ( valores [ contador ] % 10 = 0 ) Entao
      Escreval("Multiplos de 10 estão na Posição",contador)
   FimSe
FimPara
   
   
fimalgoritmo
