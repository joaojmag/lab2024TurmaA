Algoritmo "51"
var
produto,maior,menor,cont:inteiro


Inicio
cont<-1

enquanto (cont<=8)faca
 escreval("Digite o valor do produto : ")
 leia(produto)

 se(produto > maior)entao
  maior <- produto
  menor<-maior
senao
  se(produto<menor)entao
  menor <- produto
 FimSe
 FimSe
 cont <- cont +1
FimEnquanto
escreval(maior)
escreval(menor)


Fimalgoritmo