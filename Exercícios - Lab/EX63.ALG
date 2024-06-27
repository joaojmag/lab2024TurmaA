Algoritmo "Ex63"

//63) Crie um programa usando a estrutura “faça enquanto” que leia vários números.
//A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na
//tela:
//a) O somatório entre todos os valores
//b) Qual foi o menor valor digitado
//c) A média entre todos os valores

Var
   num, soma, menor, pares, cont : Inteiro
   media : Real
   continue : Caracter

inicio

      EscrevaL (" __________________________________________" )
      EscrevaL ("|                                          |")
      EscrevaL ("| Digite Números e descubra a soma e média |")
      EscrevaL ("|__________________________________________|")
      EscrevaL (" ")

      EscrevaL (" ")
      Escreva("Digite um número: ")
      Leia(num)

      media <- media + num
      cont <- cont + 1
      soma <- soma + num

      Se (num > menor ) entao
         menor <- num
      FimSe

      Se ( num % 2 = 0 ) entao
         pares <- pares + 1
      FimSe

      Escreva("Deseja continuar? [S/N]: ")
      Leia (continue)
      LimpaTela

      Enquanto (continue = "s") ou (continue = "S") Faca

                  LimpaTela
                  EscrevaL (" __________________________________________" )
                  EscrevaL ("|                                          |")
                  EscrevaL ("| Digite Números e descubra a soma e média |")
                  EscrevaL ("|__________________________________________|")
                  EscrevaL (" ")

                  EscrevaL(" ")
                  Escreva("Digite um número: ")
                  Leia(num)

                  media <- media + num
                  cont <- cont + 1
                  soma <- soma + num

                   Se (num < menor ) entao
                          menor <- num
                       FimSe
                   
                   Se ( num % 2 = 0 ) entao
                      pares <- pares + 1
                   FimSe

                  Escreva("Deseja continuar? [S/N]: ")
                  Leia (continue)

      FimEnquanto

          media <- ( media / cont )

          EscrevaL("")
          EscrevaL (soma, " É a soma de todos os valores! ")
          EscrevaL (menor, " Foi o menor número digitado! ")
          EscrevaL (media:4:1, " É a media entre os valores! ")
          EscrevaL (pares, " Números são pares! ")

fimalgoritmo