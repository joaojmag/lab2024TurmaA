algoritmo "semnome"
var
num1,num2,num3,m,maiornumero:real

funcao maior(n1,n2,n3: real):real
   inicio
      maiornumero <- n1
      se n2 > maiornumero entao
         maiornumero <- n2
      fimse
      se n3 > maiorNumero entao
         maiorNumero <- n3
      fimse
retorne maiorNumero
fimfuncao

inicio
Escreva("Digite o primeiro número: ")
Leia(num1)
Escreva("Digite o segundo número: ")
Leia(num2)
Escreva("Digite o terceiro número: ")
Leia(num3)

m <- Maior(num1, num2, num3)

Escreval(m)

fimalgoritmo
