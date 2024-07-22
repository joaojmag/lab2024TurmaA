algoritmo "semnome"
var
nome:vetor[0..5] de caractere
salario:vetor[0..5] de real
sexo:vetor[0..5] de caractere
cnt:inteiro
inicio
para cnt de 1 ate 5 faca
   Escreval("qual o seu nome?")
   Leia(nome[cnt])
   Escreval("qual seu sexo? (M/F)")
   Leia(sexo[cnt])
   Escreval("qual seu salario?")
   Leia(salario[cnt])
fimpara

enquanto (cnt < 5) faca
   se (salario[cnt] >= 5000) e (sexo[cnt] = "F") e (sexo[cnt] = "f") entao
      Escreval("a seguinte mulher:",nome[cnt]," recebe mais de 5000!")
   fimse
fimenquanto



fimalgoritmo
