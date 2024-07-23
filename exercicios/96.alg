algoritmo "semnome"
var
nota1,nota2,media:real
resultado,m:real

funcao media(n1,n2:real):real
   inicio
      resultado <- (n1 + n2) / 2
         retorne resultado
fimfuncao

inicio
Escreval("Digite a primeira nota do aluno:  ")
Leia(nota1)
Escreval("Digite a segunda nota do aluno:   ")
Leia(nota2)

m <- media(nota1, nota2)

Escreval(" A média do aluno é : " , m )

fimalgoritmo
