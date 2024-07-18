Algoritmo "exe57"
var
totalF,totalM :real
salario:real
sexo,continuar:caracter

Inicio

Enquanto ( continuar <> "nao" ) Faca


   escreva ("Digite sua seu salário : ")
   leia (salario)
   escreva ("Digite seu sexo : ")
   leia (sexo)


   se (sexo = "m" ) ou (sexo = "M" ) entao
      totalM  <-  totalM  +  salario
   Fimse
      
   se (sexo = "F" )ou (sexo = "f")entao
      totalF <- totalF  + salario
   Fimse

      
   escreva ("deseja continuar? ")
   leia (continuar)
   
FimEnquanto



escreval("O salário das mulheres são " , totalF)

escreval("O salário dos homens são " , totalM)



Fimalgoritmo