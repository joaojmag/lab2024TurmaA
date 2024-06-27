Algoritmo "Ex62"

//62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de
//várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
//não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
//na tela:
//a) Quantas idades foram digitadas
//b) Qual é a média entre as idades digitadas
//c) Quantas pessoas tem 21 anos ou mais.

Var
   idade, numIdade, idadeMais21 : Inteiro
   mediaIdade : Real
   continue : Caracter

inicio

      EscrevaL (" ______________________________________" )
      EscrevaL ("|                                      |")
      EscrevaL ("| Idade, média, quantas são mais de 21 |")
      EscrevaL ("|______________________________________|")
      EscrevaL (" ")

      continue <- "S"

      Enquanto (continue = "s") ou (continue = "S") Faca


                  EscrevaL(" ")
                  Escreva("Qual a sua idade? ")
                  Leia(idade)
                  
                  numIdade <- numIdade + 1
                  mediaIdade <- mediaIdade + idade

                   Se ( idade >= 21 ) entao
                       idadeMais21 <- idadeMais21 + 1

                   FimSe

                  Escreva("Deseja continuar? [S/N]: ")
                  Leia (continue)


      FimEnquanto

          mediaIdade <- ( mediaIdade / numIdade )

          EscrevaL("")
          EscrevaL (numIdade, " Idades foram digitadas! ")
          EscrevaL (mediaIdade:4:1, " É a media das idades digitadas! ")
          EscrevaL (idadeMais21, " Pessoas tem 21 anos ou mais! ")

fimalgoritmo