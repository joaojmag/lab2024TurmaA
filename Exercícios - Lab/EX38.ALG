Algoritmo "Ex38"

//38) Escreva um programa que mostre na tela a seguinte contagem:
//6 7 8 9 10 11 Acabou!

Var
   sexo: caracter
   sal, nsal: real
   anos: inteiro

inicio

      EscrevaL (" ________________________________________________" )
      EscrevaL ("|                                                |")
      EscrevaL ("|  Funcionário Premiado, veja seu Aumento já!    |")
      EscrevaL ("|________________________________________________|")
      EscrevaL (" ")

      Escreva(" Informe o seu salário R$: ")
      Leia(sal)

      EscrevaL("Qual o seu Gênero? ")
      EscrevaL("M para Masculino, F para Feminino")
      Leia(sexo)

      Se (sexo = "F") ou (sexo = "f") entao

         EscrevaL (" ")
         EscrevaL (" Trabalha na empresa a quantos anos? ")
         EscrevaL (" [1] -15 Anos. ")
         EscrevaL (" [2] 15 a 20 Anos. ")
         EscrevaL (" [3] +20 Anos. ")
         Leia(anos)

         Escolha anos

              Caso 1
                   nsal <- ( sal*1.05 )
                   EscrevaL (" _______________________")
                   EscrevaL ("                        ")
                   EscrevaL (" Obrigado pelos seus anos de trabalho aqui na empresa!")
                   EscrevaL (" Por seu trabalho árduo você receberá um aumento, segue abaixo seu salário já reajustado: ")
                   EscrevaL (" Seu novo salário é de R$",nsal:6:2,".")
                   EscrevaL ("________________________")
              Caso 2
                   nsal <- ( sal*1.12 )
                   EscrevaL (" _______________________")
                   EscrevaL ("                        ")
                   EscrevaL (" Obrigado pelos seus anos de trabalho aqui na empresa!")
                   EscrevaL (" Por seu trabalho árduo você receberá um aumento, segue abaixo seu salário já reajustado: ")
                   EscrevaL (" Seu novo salário é de R$",nsal:6:2,".")
                   EscrevaL ("________________________")
              Caso 3
                   nsal <- ( sal*1.23 )
                   EscrevaL (" _______________________")
                   EscrevaL ("                        ")
                   EscrevaL (" Obrigado pelos seus anos de trabalho aqui na empresa!")
                   EscrevaL (" Por seu trabalho árduo você receberá um aumento, segue abaixo seu salário já reajustado: ")
                   EscrevaL (" Seu novo salário é de R$",nsal:6:2,".")
                   EscrevaL ("________________________")
              OutroCaso
                   EscrevaL("Dígito inválido!")

      FimEscolha

      Senao

           Se (sexo = "M") ou (sexo = "m") entao

               EscrevaL (" ")
               EscrevaL (" Trabalha na empresa a quantos anos? ")
               EscrevaL (" [1] -20 Anos. ")
               EscrevaL (" [2] 20 a 30 Anos. ")
               EscrevaL (" [3] +30 Anos. ")
               Leia(anos)

               Escolha anos

                    Caso 1
                         nsal <- ( sal*1.03 )
                         EscrevaL (" _______________________")
                         EscrevaL ("                        ")
                         EscrevaL (" Obrigado pelos seus anos de trabalho aqui na empresa!")
                         EscrevaL (" Por seu trabalho árduo você receberá um aumento, segue abaixo seu salário já reajustado: ")
                         EscrevaL (" Seu novo salário é de R$",nsal:6:2,".")
                         EscrevaL ("________________________")
                    Caso 2
                         nsal <- ( sal*1.13 )
                         EscrevaL (" _______________________")
                         EscrevaL ("                        ")
                         EscrevaL (" Obrigado pelos seus anos de trabalho aqui na empresa!")
                         EscrevaL (" Por seu trabalho árduo você receberá um aumento, segue abaixo seu salário já reajustado: ")
                         EscrevaL (" Seu novo salário é de R$",nsal:6:2,".")
                         EscrevaL ("________________________")
                    Caso 3
                         nsal <- ( sal*1.25 )
                         EscrevaL (" _______________________")
                         EscrevaL ("                        ")
                         EscrevaL (" Obrigado pelos seus anos de trabalho aqui na empresa!")
                         EscrevaL (" Por seu trabalho árduo você receberá um aumento, segue abaixo seu salário já reajustado: ")
                         EscrevaL (" Seu novo salário é de R$",nsal:6:2,".")
                         EscrevaL ("________________________")
                    OutroCaso
                         EscrevaL("Dígito inválido!")

               FimEscolha

           FimSe
      FimSe

fimalgoritmo