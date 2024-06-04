Algoritmo "semnome"
// 
//
Var
distancia,km:real
viagenmaislonga:real


Inicio
Escreva("Qual a distância(em Km) que deseja percorrer? ")
Leia(km)
distancia<-km*0.50
viagenmaislonga<-km*0.45
Se km<200 Entao
 Escreva("Sua viagem ficou em: ", distancia, " reais")
Senao
 Escreva("Sua viagem ficou em: ",viagenmaislonga," reais")
FimSe

Fimalgoritmo