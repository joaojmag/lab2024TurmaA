algoritmo "semnome"
var
nome:caractere
nota,N1,N2:real
inicio
Escreva("Qual seu nome?:")
Leia(nome)
Escreva("qual sua nota?:")
Leia(N1)
Escreva("qual sua outra nota?:")
Leia(N2)
nota <-N1+N2/2
se nota>7.0 então
Escreva("parabens, você teve um ótimo aproveitamento lindão")
Senão
Escreva("precisa estudar mais burrão")
fimse
