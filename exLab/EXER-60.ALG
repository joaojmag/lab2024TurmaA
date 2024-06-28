Algoritmo "Exer-60"

var
contador: inteiro
idade, genero, mulher, homem: inteiro
maisVelha, mulherJovem, menos18: inteiro
media,soma: real
resposta, nome, nomeVelha, nomeJovem: caractere
inicio
   contador <- 1
   soma <- 0
   media <- 0
   resposta <- "s"
   maisVelha <- 0
   mulherJovem <- 0

   escreval (" ANALISANDO DADOS ALGUMAS PESSOAS:   ")

   enquanto (resposta= "s") faca
      escreval  ("Digite a ",contador, "° nome: ")
      leia (nome)
      escreval ("Qual sua idade? ")
      leia (idade)
      escreval (" Qual seu gênero: ")
      escreval ("[1] Mulher")
      escreval ("[2] Homem")
      leia (genero)
      se (genero=1) ou (genero=2) entao
         Escolha genero
            caso 1
               mulher <- mulher +1
               se (idade < mulherJovem) entao
                  mulherJovem <- idade
                  nomeJovem <- nome
               fimse
               se (idade <18) entao
                  menos18 <- mulher
               fimse
            caso 2
               homem <- homem + 1
         fimEscolha

         se (contador = 1) entao
            mulherJovem <- idade
            maisVelha <- idade
            nomeVelha <- nome
            nomeJovem <- nome
         fimse
         
         escreval ("Deseja continuar?")
         escreval  ("[s/n]")
         leia (resposta)
         
         se (resposta = "s" ) ou  (resposta= "n") entao
            contador <- contador +1
         senao
            escreval ("Resposta inválida")
         fimSe

         se (idade > maisVelha) entao
            maisVelha <- idade
            nomeVelha <- nome
         fimse
         
         soma <- soma + idade
         
      senao
         escreval ("Resposta inválida")
      fimSe
   fimEnquanto
   media <- soma / (contador - 1)
   
   escreval ("O nome da pessoa mais velha foi: ",nomeVelha)
   se (mulher <> 0) entao
      escreval ("O nome da mulher mais jovem foi: ",nomeJovem)
      escreval (menos18, " mulheres tem menos de 18 anos.")
   fimse
   escreval ("A média de idade do grupo foi: ", media:5:2)
   
Fimalgoritmo