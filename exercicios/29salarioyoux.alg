algoritmo "semnome"
var
anos:inteiro
nome:caractere
salario:real
inicio
Escreva("Qual o seu nome?:")
Leia(nome)
Escreva("a quantos anos você esta na empresa?:")
Leia(anos)
Escreva("qual o seu salario?:")
Leia(salario)
se anos<3 entao
Escreva("seu novo salario sera:",3/100*(salario)+salario)
senao
se(anos>=3) e (anos<=10) entao
Escreva("Seu novo salario é:",12.5/100*(salario)+salario)
senao anos>10
Escreva("Seu novo salario é:",20/100*(salario)+salario)
fimse
fimse

fimalgoritmo
