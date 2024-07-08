algoritmo "sim"
var
contador,maiorPeso,mulheresCadastradas,homensMais:inteiro
peso,mediaMulheres,maiorPesoHomens:real
sexo:caractere
entrarHomens: logico

inicio
mulheresCadastradas <- 0
homensMais <- 0
entrarHomens <- verdadeiro

Para contador <- 1 ate 8 Faca
Escreval("Digite seu peso em KG: ")
Leia(peso)
Escreval("Digite seu sexo(F,M): ")
Leia(sexo)

   Se sexo = "F" Entao
      mulheresCadastradas <-mulheresCadastradas + 1
      mediaMulheres <- peso / mulheresCadastradas
   FimSe
   
   Se ( peso > 100 ) e ( sexo = "M" )  Entao
      homensMais <- homensMais + 1
   FimSe
   
   Se ( entrarHomens ) e ( sexo = "M" ) Entao
      maiorPesoHomens <- peso
         entrarHomens <- falso
         
   Senao
   Se peso > maiorPesoHomens Entao
      maiorPesoHomens <- peso
   FimSe
   FimSe
   

   
FimPara

Escreval("Quantidade de mulheres cadastradas: ",mulheresCadastradas)
Escreval("Quantos homens pesam mais de 100kg: ",homensMais)
Escreval("Média do peso das mulheres: ",mediaMulheres)
Escreval("O maior peso entre os homens: ",maiorPesohomens)


fimalgoritmo

