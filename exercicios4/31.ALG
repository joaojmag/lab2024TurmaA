algoritmo "semnome"
var
nome1,nome2,mao1,mao2:caractere
inicio
Escreval("Seja Bem-Vindo ao Jogo de JoKenPo")
Escreval("Escreva seu nome: ")
Leia(nome1)
Escreval("Escreva seu nome: ")
Leia(nome2)

Escreva(nome1," digite:1=papel,2=tesoura,3=pedra ")
Leia(mao1)
Escreva(nome2," digite:1=papel,2=tesoura,3=pedra ")
Leia(mao2)



Se (mao1="1") e (mao2="1") Entao
 Escreva("Que pena, deu empate")
Senao
Se (mao1="3") e (mao2="3") Entao
 Escreva("Que pena, deu empate")
Senao
Se (mao1="2") e (mao2="2") Entao
 Escreva("Que pena, deu empate")
Senao
Se (mao1="1") e (mao2="3") Entao
 Escreva("O jogador 1 ganhou")
 Senao
Se (mao1="2") e (mao2="1") Entao
 Escreva("O jogador 1 ganhou")
Senao
Se (mao1="3") e (mao2="2") Entao
 Escreva("O jogador 1 ganhou")
Senao
Se (mao1="3") e (mao2="1") Entao
 Escreva("O jogador 2 ganhou")
Senao
Se (mao1="2") e (mao2="3") Entao
 Escreva("O jogador 2 ganhou")
Senao
Se (mao1="1") e (mao2="2") Entao
 Escreva("O jogador 2 ganhou")

FimSe
FimSe
FimSe
FimSe
FimSe
FimSe
FimSe
fimalgoritmo
