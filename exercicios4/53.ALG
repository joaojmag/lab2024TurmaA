algoritmo "semnome"
var
idade,contador,valor:inteiro
mediaGrupo,mediaHomens,mulheresVinte:real
quantidadeHomens,quantidadeMulheres:inteiro
sexo: caractere
inicio
quantidadeHomens <- 0
quantidadeMulheres <- 0
contador<-1
valor<-5

Enquanto ( contador <= valor ) Faca
//lendo a idade e o sexo
   Escreval("Escreva F=feminino ou M=Masculino")
   Leia( sexo )
   Escreval("Escreva sua idade: ")
   Leia( idade )
//pegando quantos homens foram cadastrados
   Se (sexo = "M") Entao
      quantidadeHomens <-  quantidadeHomens + 1
   Senao
      quantidadeMulheres <- quantidadeMulheres + 1
   FimSe


   mediaHomens <-quantidadeHomens/idade
   mediaGrupo <- idade / valor
   



   Se (quantidadeMulheres > "20") Entao
    mulheresVinte <- quantidadeMulheres
   FimSe

   contador <-  contador + 1

FimEnquanto
Escreval("Quantos homens se cadastraram : ",quantidadeHomens)
Escreval("Quantas mulheres se cadastraram:  ",quantidadeMulheres)
Escreval("A média de idade do grupo: ", mediaGrupo)
Escreval("A média de idade dos homens: ",mediaHomens)
Escreval("A quantidade de mulheres que te mais de 20 anos: ",mulheresVinte)
fimalgoritmo