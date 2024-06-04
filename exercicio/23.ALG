Algoritmo "semnome"

Var
nome,sexo:caractere
valordaCompra,desconto,valorFinal:real

Inicio
Escreva("Digite o nome do cliente ")
Leia(nome)
Escreva("Digite o sexo do cliente (M para mulher, H para homem): ")
Leia(sexo)
Escreva("Qual foi o valor da sua compra? ")
Leia(valordaCompra)

Se sexo = "M"  Entao
 desconto<-valordaCompra*0.13
Senao
 desconto<-valordacompra*0.5
FimSe
 valorFinal <- valordaCompra - desconto

Escreva("Cliente: ", nome)
Escreva("Valor das compras: R$", valordaCompra)
Escreva("Valor do desconto: R$", desconto)
Escreva("Valor final com desconto: R$", valorFinal)


Fimalgoritmo
