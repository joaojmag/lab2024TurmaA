Algoritmo "Ex18"

//18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
//dela e depois mostre se ela pode ou não votar.

Var

    anoNasc, idade: Inteiro
   //Baseando que estamos em 2024

inicio

      Escreva("Você nasceu em que ano? ")
      Leia(anoNasc)

      idade <- ( 2024 - anoNasc )

      Se (idade >= 18) entao
         EscrevaL(" você tem:", idade, " Anos, já pode votar!")
      senao
         Escreva("você tem:", idade, " Anos, não pode votar!")
      FimSe
      
fimalgoritmo