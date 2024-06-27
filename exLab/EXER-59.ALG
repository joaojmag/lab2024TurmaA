Algoritmo "Exer-59"

var
contador, idade, soma, genero, mulher, homem: inteiro
maiorIdade: inteiro
media: real
resposta: caractere

inicio
   contador <- 1
   soma <- 0
   media <- 0
   resposta <- "s"

   escreval (" ANALISANDO A IDADE DE ALGUMAS PESSOAS:   ")
   enquanto (resposta= "s") faca
      escreval  ("Digite a ",contador, "° idade: ")
      leia (idade)
      escreval (" Qual seu gênero: ")
      escreval ("[1] Mulher")
      escreval ("[2] Homem")
      leia (genero)

      se (genero=1) ou (genero=2) entao
         Escolha genero
            caso 1
               mulher <- mulher +1
            caso 2
               homem <- homem + 1
               soma <- soma + idade
         fimEscolha

         escreval ("Deseja continuar?")
         escreval  ("[s/n]")
         leia (resposta)

         se (resposta = "s" ) ou  (resposta= "n") entao
            contador <- contador +1
         senao
            escreval ("Resposta inválida")
         fimSe

         se (idade > maiorIdade) entao
            maiorIdade <- idade
         fimSe
         
      senao
         escreval ("Resposta inválida")
      fimSe
   fimEnquanto

   media <- soma / homem

   escreval ("A maior nota lida foi: ",maiorIdade)
   escreval ("A média de idade entre os homens é: ",media)


Fimalgoritmo