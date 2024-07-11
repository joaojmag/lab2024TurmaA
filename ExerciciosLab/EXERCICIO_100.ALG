algoritmo "exercicio_100"
var

   A, B, RES: real
   situacoes: caractere

// procedimentos

Procedimento pulaLinha()
inicio

      Escreval("")

FimProcedimento

Procedimento cursor()
inicio

      Escreval("------------------------")

FimProcedimento

// funções

Funcao media(X, Y: real) : real
var S: real
    M: real
inicio

      S <- X + Y
      M <- S/2
      Retorne M

FimFuncao

Funcao Situacao(N: real) : caractere
inicio

       se (N >= 7) entao
          Retorne("APROVADO")
       fimse
       
       se (N >= 5.1) e (N <= 6.9) entao
          Retorne("RECUPERAÇÃO")
       fimse
       
       se (N < 5) entao
          Retorne ("REPROVADO")
       fimse
       
FimFuncao

inicio

      Escreva("DIGITE A PRIMEIRA NOTA: ")
      Leia(A)

      Escreva("DIGITE A SEGUNDA NOTA: ")
      Leia(B)

      pulaLinha()
      cursor()
      
      RES <- media(A, B)
      situacoes <- Situacao(RES)
      
      Escreval("A MEDIA DO ALUNO É ", RES)
      Escreval("STATUS: ", situacoes)
      cursor()

fimalgoritmo