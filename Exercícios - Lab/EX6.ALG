Algoritmo "Ex6"

//6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
//sucessor.

Var

   Antes, Depois, Num : Inteiro


Inicio

      Escreva("Escolha um número entre 0 e 1000: ")
      Leia(Num)
      
      Antes <- (Num -1)
      
      Depois <-(Num +1)
      
      Escreval("O número escolhido foi:", Num)
      Escreval("Seu antecessor é:", antes)
      Escreval("Seu sucessor é:", depois)
      
Fimalgoritmo