Algoritmo "Ex68"

//68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
//“para”. No final, mostre na tela:
//a) Quantas mulheres foram cadastradas
//b) Quantos homens pesam mais de 100Kg
//c) A média de peso entre as mulheres
//d) O maior peso entre os homens

Var
   i, pesoF, pesoM, mulher, homemMais100kg, pesoMaiorHomem : Inteiro
   mediaMulher : Real
   sexo : Caracter
   
//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" __________________________" )
      EscrevaL ("|                          |")
      EscrevaL ("| Sexo e peso de 8 pessoas |")
      EscrevaL ("|__________________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para i <- 1 ate 8 faca

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
             Escreva("Qual o seu peso? ")
             Leia(pesoF)

             mulher <- mulher + 1
             mediaMulher <- mediaMulher + pesoF

         Senao

              Se (sexo = "M") ou (sexo = "m") entao

                  EscrevaL(" ")
                  Escreva("Qual o seu peso? ")
                  Leia(pesoM)

                   Se ( pesoM > 100 ) entao
                       homemMais100Kg <- homemMais100Kg + 1
                   FimSe

                   Se ( pesoM > pesoMaiorHomem ) entao
                       pesoMaiorHomem <- pesoM
                   FimSe
                   
              FimSe
          FimSe
          

      FimPara

      EscrevaL(mulher, " É o número de Mulheres Cadastradas!")
      EscrevaL(homemMais100Kg, " É o número de Homens que pesam mais de 100Kg!")
      EscrevaL(mediaMulher, " É a média do peso das Mulheres!")
      EscrevaL(pesoMaiorHOmem, " É o maior Peso entre os Homens!")

fimalgoritmo