Algoritmo "Exer-59"

var
contador, idade, soma, genero, mulher, homem: inteiro
maiorIdade, mulherJovem: inteiro
media: real
resposta: caractere

inicio
   contador <- 1
   soma <- 0
   media <- 0
   resposta <- "s"
   maiorIdade <- 0
   mulherJovem <- 0
   
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
               media <- soma / homem
         fimEscolha
         
         se (contador = 1) entao
            mulherJovem <- idade
            maiorIdade <- idade
         fimse
         
         escreval ("Deseja continuar?")
         escreval  ("[s/n]")
         leia (resposta)
         
         se (resposta = "s" ) ou  (resposta= "n") entao
            contador <- contador +1
         senao
            escreval ("Resposta inválida")
         fimSe
         se (contador = 1) entao
            mulherJovem <- idade
            maiorIdade <- idade
         fimse
         
         se (idade > maiorIdade) entao
            maiorIdade <- idade
         fimSe
         
         se (idade < mulherJovem) entao
            mulherJovem <- idade
         fimse

      senao
         escreval ("Resposta inválida")
      fimSe
   fimEnquanto

   escreval ("A maior idade lida foi: ",maiorIdade)
   se (homem <> 0) entao
      escreval (homem, " homens foram cadastrados.")
      escreval ("A média de idade entre os homens é: ",media)
   senao
      escreval ("Nenhum homem foi cadastrado")
   fimse

   se (mulher <> 0) entao
      escreval ("A idade da mulher mais jovem é: ",mulherJovem)
   fimse


Fimalgoritmo
