algoritmo "semnome"
var
contador,valor,chute,sorteio:inteiro
ganhou:logico
inicio
contador <- 1
valor <- 4
ganhou <- falso


Escreval("Seja bem vindo ao jogo de adivihações")

Enquanto ( contador <= valor ) e ( ganhou = falso )  Faca
   Escreval("Digite um valor entre 1 a 10:  ")
   Leia( chute )
   
   Escreval("Número escolhido pelo computador: ")
   aleatorio 1,10
   Leia(sorteio)
   Escreval( )
   aleatorio off
   
   Se (chute = sorteio)Entao
      Escreval ("Você acertou,Parabéns")
      ganhou <- verdadeiro

   Senao
      Escreval("Puxa, você errou. Tente novamente")
   FimSe


contador <- contador + 1

FimEnquanto

fimalgoritmo

//sortear n entre 1 a 10 e jogador vai ter
//4 tentativa para acertar
