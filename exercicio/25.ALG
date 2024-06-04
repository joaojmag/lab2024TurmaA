Algoritmo "semnome"
// 
//
Var
n1,n2,n3:real


Inicio
Escreva("Digite o valor do primeiro segmento: ")
Leia(n1)
Escreva("Digite o valor do segundo segmento: ")
Leia(n2)
Escreva("Digite o valor do terceiro segmento: ")
Leia(n3)

Se (n1+n2>n3) OU (n1+n3>n2) OU (n2+n3>n1) Então
 Escreva("Você pode formar um triângulo com esses segmentos")
Senao
 Escreva("Você não pode formar um triângulo com esses segmentos")
FimSe


Fimalgoritmo