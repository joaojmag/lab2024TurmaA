Algoritmo "Ex21"

//21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
//BISSEXTO.

Var

    ano: Inteiro

inicio

      EscrevaL("Verificador de Ano Bissexto")
      EscrevaL(" ")
      Escreva("Digite um Ano de sua escolha: ")
      Leia(ano)

      Se ( ano mod 4 = 0) entao
         EscrevaL(ano, " é Bissexto.")
      senao
         Escreva(ano, " não é Bissexto.")
      FimSe

fimalgoritmo