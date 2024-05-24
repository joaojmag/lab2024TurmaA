Algoritmo "Ex6"

//6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
//sucessor.

Var

   antes, depois, num : Inteiro


Inicio

      Escreva("Escolha um número entre 0 e 1000: ")
      Leia(num)
      
      antes <- (num -1)
      
      depois <-(num +1)
      
      Escreval("O número escolhido foi:", num)
      Escreval("Seu antecessor é:", antes)
      Escreval("Seu sucessor é:", depois)
      
Fimalgoritmo
