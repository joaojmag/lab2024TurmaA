algoritmo "semnome"
var
contador,menor,maior,idade:inteiro
inicio
Escreval("bem vindo ao contador!!")
Escreval("=========================")

contador <- 1

enquanto (contador <= 10) faca
   Escreva("digite a idade da ",contador," pessoa:")
   Leia(idade)
   contador <- contador + 1
   
se (idade > 18) entao
   maior<- maior + 1
senao
   se (idade<5)entao
      menor <- menor + 1
   fimse
fimse

fimenquanto

Escreval("há ",maior," maiores de 18")
Escreva("há ",menor," menores de 5")
fimalgoritmo
