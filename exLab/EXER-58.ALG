Algoritmo "Exer-58"

var
contador, idade, soma: inteiro
media: real
resposta: caractere

inicio
   contador <- 1
   soma <- 0
   media <- 0
   resposta <- "s"
   escreval ("   CALCULANDO A MEDIA DA IDADE DE ALGUNS ALUNOS:   ")
   enquanto (resposta= "s") faca
      escreval  ("Digite a ",contador, "° idade: ")
      leia (idade)
      se (idade <> 999) entao
         escreval ("Deseja continuar?")
         escreval  ("[s/n]")
         leia (resposta)

         se (resposta = "s" ) ou  (resposta= "n") entao
            contador <- contador +1
         senao
            escreval ("Resposta inválida")
         fimSe
      senao
         escreval ("Resposta inválida. Digite novamente:")
      fimSe
      soma <- soma + idade
   fimEnquanto
   media <- soma / (contador -1)
   escrevaL ("Nessa turma há ",(contador -1)," alunos.")
   escreva ("A media das idades é: ", media:6:2)
Fimalgoritmo