Algoritmo "Ex52"

//52) Crie um algoritmo que leia a idade de 10 pessoas, mostrando no
//final: a) Qual é a média de idade do grupo
//b) Quantas pessoas tem mais de 18 anos
//c) Quantas pessoas tem menos de 5 anos
//d) Qual foi a maior idade lida

Var
   idade, cont, maior, mais18, menos5 : Inteiro
   media : real

inicio

      EscrevaL (" _____________________________________" )
      EscrevaL ("|                                     |")
      EscrevaL ("| 10 Idades, sua média e grupo social |")
      EscrevaL ("|_____________________________________|")
      EscrevaL (" ")

      Repita
            Escreva("Digite a Idade desta pessoa: ")
            Leia(idade)
            cont <- cont + 1
            
               Se ( idade > 18 ) entao

                  mais18 <- mais18 + 1
                  media <- media + idade
                  
                  Se ( idade > maior ) entao
                       maior <- idade
                  FimSe

               Senao
                    Se ( idade < 5 ) entao

                        menos5 <- menos5 + 1
                        media <- media + idade
                        
                    Se ( idade > maior ) entao
                       maior <- idade
                  FimSe

               Senao
                    Se ( idade > 5 ) e ( idade < 18 ) entao
                        media <- media + idade
                        
                    Se ( idade > maior ) entao
                       maior <- idade
                  FimSe

               FimSe
               FimSe
               FimSe
      Ate( cont >= 10 )

      media <- ( media / 10)

      EscrevaL("")
      EscrevaL (media:3:0, " É a média das idades fornecidas. ")
      EscrevaL (mais18, " Pessoas são maiores de 18 anos! ")
      EscrevaL (menos5, " Pessoas tem menos de 5 anos! ")
      EscrevaL (maior, " É a idade da pessoa mais velha! ")
      
fimalgoritmo