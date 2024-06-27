Algoritmo "semnome"

var
idade, dezoito, cinco, menor,valor, cont, valContador:inteiro
media:real
Inicio
valContador <- 3
cont <- 1
valor <- 0
Enquanto (cont <= valContador ) faca
   escreval("Digite sua idade :")
   escreval("__________________________________")
   leia( idade )

   valor <- valor + idade

   se ( idade >= 18 ) entao
      escreval( "voce esta na faixa de 18 anos:  voce tem : " ,idade , " anos" )
   senao
      se(idade <= 5) entao
      escreval("voce esta na faixa de 5 anos:  voce tem  :  " ,idade , " anos")
     FimSe
   FimSe
cont <- cont +1




escreval("__________________________________")
FimEnquanto
media <- valor / valContador
escreval ("A média das idades é " , media)
Fimalgoritmo