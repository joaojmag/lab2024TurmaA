algoritmo "semnome"
var
pedra,papel,tesoura:inteiro
j1,j2:inteiro
inicio
Escreval("BEM VINDO AO JOKEN PO!")
Escreval("selecione:[1]pedra [2]papel ou [3]tesoura")
Escreva("jogador numero um, qual sua escolha?:")
Leia(j1)
Escreva("jogador numero dois,qual sua escolha?:")
Leia(j2)
pedra<-1
papel<-2
tesoura<-3


se(j1=pedra)e(j2=papel)entao
Escreva("vitória do jogador dois!!")
senao
se(j1=papel)e(j2=pedra)entao
Escreva("a vitória é do jogador numero um!!")
fimse
se (j1=pedra)e(j2=pedra)entao
Escreva("EMPATE!!")
fimse
fimse

se(j1=tesoura)e(j2=pedra)entao
Escreva("vitória do jogador numero dois!!")
senao
se(j1=pedra)e(j2=tesoura)entao
Escreva("vitória do jogador numero um!!")
fimse
se(j1=papel)e(j2=papel)entao
Escreva("EMPATE!!")
fimse
fimse

se(j1=tesoura)e(j2=papel)entao
Escreva("vitória do jogador numero um!!")
senao
se(j1=papel)e(j2=tesoura)entao
Escreva("vitória do jogador numero dois!!")
fimse
se (j1=tesoura)e(j2=tesoura)entao
Escreva("EMPATE!!")
fimse
fimse







fimalgoritmo

