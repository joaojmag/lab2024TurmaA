Algoritmo "Ex57"

//57) Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
//No final, mostre o total de salários pagos aos homens e o total pago às
//mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
//sempre que ler os dados de um funcionário.

Var
   salarioF, salarioM, totalF, totalM : Real
   sexo, continue : Caracter

inicio

      EscrevaL (" _____________________________________" )
      EscrevaL ("|                                     |")
      EscrevaL ("|   Salário e sexo dos FUncionários   |")
      EscrevaL ("|_____________________________________|")
      EscrevaL (" ")

      continue <- ( "S" )

      Enquanto ( continue = "S" ) ou ( continue = "s") faca

      EscrevaL(" ")
      EscrevaL("Qual o seu Gênero? ")
      Escreva("M para Masculino, F para Feminino: ")
      Leia(sexo)

      Se (sexo <> "F") e (sexo <> "f") e (sexo <> "M") e (sexo <> "m") entao
          EscrevaL(" ")
          EscrevaL("Sexo Inválido informado, Preencha seu sexo novamente!")
      FimSe

      Se (sexo = "F") ou (sexo = "f") entao

          EscrevaL(" ")
          Escreva("Qual o seu salário? ")
          
          Leia(salarioF)
          totalF <- totalF + salarioF
          
          Escreva("Deseja continuar? [S/N]: ")
          Leia (continue)

      Senao

           Se (sexo = "M") ou (sexo = "m") entao


              EscrevaL(" ")
              Escreva("Qual o seu salário? ")
              
              Leia(salarioM)
              totalM <- totalM + salarioM

              Escreva("Deseja continuar? [S/N]: ")
              Leia (continue)

      FimSe
      FimSe

      FimEnquanto


          EscrevaL("")
          EscrevaL ( " O salário total pago aos Homens foi de: R$", totalM)
          EscrevaL ( " O salário total pago às mulheres foi de: R$", totalF)

fimalgoritmo