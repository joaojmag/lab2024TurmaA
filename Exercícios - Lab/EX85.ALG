Algoritmo "Ex85"

//85) Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
//guarde esses dados em três vetores. No final, mostre uma listagem contendo
//apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.

var
   sal: vetor[0..4] de Real
   nome: vetor[0..4] de Caracter
   sexo: vetor[0..4] de Caracter
   i : Inteiro

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _______________________________________" )
      EscrevaL ("|                                       |")
      EscrevaL ("| Nome, sexo e salário dos funcionários |")
      EscrevaL ("|_______________________________________|")
      Break()

FimProcedimento

Inicio
      NavBar()

      Para i <- 0 ate 4 faca
      
           Escreva("Digite o sexo do(a) funcionário(a), [F/M]: ")
           Leia(sexo[i])
           
           Escreva("Digite o nome do(a) funcionário(a): ")
           Leia(nome[i])

           Escreva("Digite o salário do(a) funcionário(a): ")
           Leia(sal[i])

           Break()

      FimPara

      LimpaTela
      NavBar()

      EscrevaL("Listagem das Mulheres que Ganham mais de 5k")

      Para i <- 0 ate 4 faca
         Se( sexo[i] = "f" ) ou ( sexo[i] = "F" ) entao
         
            Se( sal[i] > 5000 ) entao
                EscrevaL(nome[i]," - R$", sal[i]:5:2)
            FimSe
            
         FimSe
      FimPara

fimalgoritmo