algoritmo "semnome"
var
N1,N2,media:real
inicio
Escreva("Primeira nota:")
Leia(N1)
Escreva("Segunda nota:")
Leia(N2)
media <-(N1+N2)/2

se (media<5) entao
Escreva("sua nota final foi",media," sinto muito, mas você foi reprovado!")
senao
se (media>=5) e (media<7)entao
Escreva("sua nota final foi",media," você esta de recuperação,boa sorte!")
senao (media>=7)
Escreva("meus parabens, sua nota final foi:",media," você esta aprovado!!")
fimse
fimse

fimalgoritmo
