Algoritmo "Ex37"

//37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um
//aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
//o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
//No final, mostre o seu novo salário, baseado na tabela a seguir:
//- Mulheres
//- menos de 15 anos de empresa: +5%
//- de 15 até 20 anos de empresa: +12%
//- mais de 20 anos de empresa: +23%
//- Homens
//- menos de 20 anos de empresa: +3%
//- de 20 até 30 anos de empresa: +13%
//- mais de 30 anos de empresa: +25%

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