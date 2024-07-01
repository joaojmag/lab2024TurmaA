Algoritmo "Exer-62"

Var
contador, idade, soma, maior21: inteiro
media: real
resposta: caractere
Inicio
   contador <- 1
   escreval ("CONTAGEM COM 'REPITA' - IDADES")
   
   repita
      escreval ("Qual é a ", contador, "° idade?")
      leia (idade)
      escreval ("Deseja continuar?")
      escreval  ("[s/n]")
      leia (resposta)

      se (resposta = "s") ou (resposta = "n") entao
      contador <- contador + 1
      senao
         escreval ("Resposta inválida!")
      fimSe
       se ( idade >= 21) entao
         maior21 <- maior21 + 1
       fimse
      soma <- soma + idade
   ate (resposta = "n")
   media <- soma / (contador - 1)
   escreval ((contador - 1), " idades foram digitadas.")
   escreval ("A média entre as idades é: ", media:6:2)
   escreva  (maior21, " pessoas tem 21 anos ou mais.")
   
Fimalgoritmo