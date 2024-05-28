Algoritmo "Ex22"

//22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
//situação em relação ao alistamento militar.
//- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
//alistamento.
//- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
//alistamento.

Var

   anoNasc, idade: Inteiro
   //Baseando que estamos em 2024

inicio

      Escreva("Você nasceu em que ano? ")
      Leia(anoNasc)

      idade <- ( 2024 - anoNasc )
      
      Se (idade = 18) entao
         EscrevaL(" você tem:", idade, " Anos, está na hora de se alistar!")
      FimSe
      
      Se (idade < 18) entao
         EscrevaL("você tem:", idade, " Anos, ainda não precisa se alistar!")
         EscrevaL("Faltam:", (18 - idade), " para se alistar ainda.")
      Senao
      Se (idade > 18) entao
         EscrevaL("você tem:", idade, " Anos!")
         EscrevaL("Já se passaram:", (idade - 18), " Anos desde que você se alistou.")
      FimSe
      FimSe
fimalgoritmo