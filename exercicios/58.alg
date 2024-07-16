algoritmo "58"

var
idade,contador,soma:inteiro
media:real

inicio
Escreval("BEM-VINDO A ESCOLA!")
Escreval("========================")

contador <- 0
soma <- 0

enquanto (verdadeiro) faca
   Escreva("Digite sua idade (999 para desligar o programa): ")
   Leia(idade)

   se (idade = 999) entao
      Escreval("Você usou o comando de desligue!")
   se (contador > 0) entao
   media <- soma / contador
   Escreval("há ", contador, " alunos.")
   Escreval("A média da idade dos alunos é ", media:3:2)
      senao
         Escreval("Nenhum aluno foi registrado.")
fimse

fimse

soma <- soma + idade
contador <- contador + 1

fimenquanto
fimalgoritmo

