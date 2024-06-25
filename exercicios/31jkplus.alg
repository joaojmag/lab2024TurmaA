algoritmo "semnome"
var
   j1, j2, solo, mostrar, embaralhar: inteiro
   pedra, papel, tesoura: inteiro
   modo: caractere
inicio
para embaralhar de 1 ate 3 faca
mostrar<-randi(3)
fimpara
   Escreval("BEM VINDO AO JOKEN PO!!!")
   Escreval("---------------------------")
   Escreval("SELECIONE SEU MODO DE JOGO:")
   Escreva("(C) PARA COMPUTADOR E (J) PARA PLAYER: ")
   Leia(modo)

   pedra <- 1
   papel <- 2
   tesoura <- 3

   escolha modo
   caso "J"
Escreval("selecione:[1]pedra [2]papel ou [3]tesoura")
Escreva("jogador numero um, qual sua escolha?:")
Leia(j1)
Escreva("jogador numero dois,qual sua escolha?:")
Leia(j2)

se (j1=pedra)e(j2=pedra) ou (j1=papel)e(j2=papel)ou(j1=tesoura)e(j2=tesoura)entao
   Escreva("EMPATE!!")
   fimse

se(j1=pedra)e(j2=papel)entao
   Escreva("vitória do jogador numero dois!!")
   fimse

se(j1=papel)e(j2=pedra)entao
   Escreva("vitória do jogador numero um!!")
   fimse

se(j1=tesoura)e(j2=pedra)entao
   Escreva("vitória do jogador numero dois!!")
   fimse

se(j1=pedra)e(j2=tesoura)entao
   Escreva("vitória do jogador numero um!!")
   fimse

se(j1=papel)e(j2=tesoura)entao
   Escreva("vitória do jogador numero dois!!")
   fimse

se(j1=tesoura)e(j2=papel)entao
   Escreva("vitória do jogador numero um!!")
   fimse

caso "C"
Escreval("selecione:[1]pedra [2]papel ou [3]tesoura")
Escreva("jogado, qual sua escolha?:")
Leia(solo)

se (solo = mostrar) entao
   Escreval("EMPATE!!")
senao
se (solo = pedra) e (mostrar = papel) entao
Escreval("VITÓRIA DA MÁQUINA!!!")
Escreval("A MÁQUINA SELECIONOU ", mostrar)
fimse

se (solo = papel) e (mostrar = pedra) entao
Escreval("SUA VITÓRIA!!")
Escreval("A MÁQUINA SELECIONOU ", mostrar)
fimse

se (solo = tesoura) e (mostrar = pedra) entao
Escreval("VITÓRIA DA MÁQUINA!!")
Escreval("A MÁQUINA SELECIONOU ", mostrar)
fimse

se (solo = pedra) e (mostrar = tesoura) entao
Escreval("SUA VITÓRIA!!")
Escreval("A MÁQUINA SELECIONOU ", mostrar)
fimse

se (solo = papel) e (mostrar = tesoura) entao
Escreval("VITÓRIA DA MÁQUINA!!")
Escreval("A MÁQUINA SELECIONOU ", mostrar)
fimse

se (solo = tesoura) e (mostrar = papel) entao
Escreval("SUA VITÓRIA!!")
Escreval("A MÁQUINA SELECIONOU ", mostrar)
fimse
fimse

se(mostrar=0)entao
Escreva("a maquina é burra e selecionou nenhum.")
fimse
FIMESCOLHA



   fimalgoritmo
