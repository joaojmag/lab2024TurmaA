algoritmo "semnome"
var
nome, sexo:caractere
pessoa: inteiro
salario,anos,salariofinal,salariof:real
inicio
Escreval("BEM VINDO(A) AO NEDIDE'S STORE")
Escreval("==================================")
Escreval("você é cliente ou funcionário?")
Escreval("==================================")
Escreval("(1) para cliente e (2)para funcionario!")
Leia(pessoa)

escolha pessoa

   caso 1
      Escreva("boas compras!")
      
   caso 2
      Escreval("olá funcionario!")
      Escreval("alteramos o seu salário e para saber diga as seguintes informações!")
      Escreval("====================================================================")
      Escreval("qual o seu nome?")
      Leia(nome)
      Escreva("quanto você recebia?:")
      Leia(salario)
      Escreva("qual o seu sexo? (M)masculino e (F)feminino:")
      Leia(sexo)
      Escreva("há quantos anos você trabalha na empresa?:")
      Leia(anos)

      se (sexo = "F") e (anos <= 15) entao
         Escreva("seu novo salário sera de ",(salario*(5/100))+salario)
      fimse
      
      se (sexo = "F") e (anos > 15) e (anos <= 20)entao
         Escreva("seu novo salário sera de ",(salario*(12/100))+salario)
      fimse
      
      se(sexo = "F") e ( anos > 20 ) entao
         Escreva("seu novo salário sera de ",(salario*(23/100))+salario)
      fimse

      se(sexo = "M") e ( anos <= 20 ) entao
         Escreva("seu novo salário sera de ",(salario*(3/100))+salario)
      fimse
      
      se (sexo = "M") e ( anos > 20 ) e ( anos <= 30 ) entao
         Escreva("seu novo salário sera de ",(salario*(13/100))+salario)
      fimse

      se(sexo = "M" ) e ( anos > 30 ) entao
        Escreva("seu novo salário sera de",(salario*(25/100))+100)
      fimse
      
   outrocaso
      Escreva("desculpe, não reconhecemos o comando!")
fimescolha

fimalgoritmo

