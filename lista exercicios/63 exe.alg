Algoritmo "semnome"

var
n,soma,ns,menor:inteiro
continuar:caracter
media:real
entrar:logico

Inicio

entrar <- verdadeiro
Enquanto ( continuar <> "n") faca



escreval(" digite um número ")
leia (n)

escreval(" deseja continuar ")
leia(continuar)


//somatorio

soma <- soma + n

//media

ns <- ns + 1
 media <- soma / ns
 
 
//par

se (n % 2 = 0 )entao
escreval( "numero par ")
FimSe

se entrar entao
menor <- n
entrar <- Falso
senao
se n <  menor entao
menor <- n
FimSe
FimSe

FimEnquanto

escreval( " A soma de todos os números é " , soma )
escreval(" A média é " , media )
escreval(" O menor número é " , menor )
Fimalgoritmo
