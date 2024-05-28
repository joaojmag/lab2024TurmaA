algoritmo "exercicio_18"
var
   nascimento, idade: inteiro
inicio

      Escreva("Em que ano você nasceu?: ")
      Leia(nascimento)

      idade <- 2024 - nascimento

      Escreval("Você tem ", idade, " anos.")

      se (idade>= 18) entao
         Escreva("Você já tem idade suficiente para votar.")
      senao
           Escreva("Você ainda não tem idade para votar.")
      fimse
fimalgoritmo