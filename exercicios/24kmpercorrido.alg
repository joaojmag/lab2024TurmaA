algoritmo "semnome"
var
km,passagemum,passagemdois:real
inicio
Escreva("quantos km você deseja percorrer?:")
Leia(km)
passagemum<-0.50
passagemdois<-0.45
se km=200 entao
Escreva("o preço da passagem é:",passagemum*km)
senao km>200
Escreva("o preço da passagem é:",passagemdois*km)
fimse

fimalgoritmo
