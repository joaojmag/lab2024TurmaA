var
casa,salario,prestacao,emprestimo:real
anos:inteiro
inicio
Escreval("BEM VINDO AO BANCO!")
Escreval("---------------------")
Escreval("VAMOS COLETAR SUAS INFORMAÇÕES!")
Escreval("--------------------------------")
Escreva("qual o valor da casa?")
Leia(casa)
Escreva("qual o valor do emprestimo?")
Leia(emprestimo)
limpatela
Escreva("qual o seu salário?")
Leia(salario)
limpatela
Escreva("em quantos anos você vai pagar a casa?")
Leia(anos)
prestacao<-emprestimo/anos

se (prestacao>30/100*salario)entao
Escreva("o emprestimo foi negado, pois a prestação exerce 30%")
senao (prestacao>30/100*salario)
Escreva("o emprestimo foi aceito.")


fimalgoritmo
