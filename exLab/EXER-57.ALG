Algoritmo "Exer-57"



Var
contador, genero, mulher, homem : inteiro
salario, soma, somaMulher: real
resposta: caractere
inicio
   contador <- 1
   soma <- 0
   somaMulher <- 0
   resposta <- "s"
   escreval ("   VAMOS ANALISAR ALGUNS FUNCIONÁRIOS:   ")
   enquanto (resposta= "s") faca
      escreval (contador,"° funcionário: ")
      escreval ("Qual seu salário?")
      leia (salario)
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
         fimEscolha
         se (genero = 1) entao
            somaMulher <- somaMulher + salario
         senao
            se (genero = 2) entao
               soma <-  soma + salario
            fimse
         fimse
         
         escreval ("Deseja continuar?")
         escreval  ("[s/n]")
         leia (resposta)
         se (resposta = "s" ) ou  (resposta= "n") entao
            contador <- contador +1
         fimSe
         
      senao
         escreval ("Resposta inválida")
      fimSe
   fimenquanto
   
   escreval  ("O total de salários pagos a homens é: R$",soma)
   escreval  ("O total de salários pagos a mulheres é: R$",somaMulher)


Fimalgoritmo
