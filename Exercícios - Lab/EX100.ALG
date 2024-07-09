Algoritmo "EX100"

//100) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
//um aluno e retornar a sua média para o programa principal.

var
   med, nota1, nota2 : Real
   situacion : Caracter

//Procedimentos

Procedimento Break()
Inicio
      EscrevaL(" ")

FimProcedimento

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _______________________________" )
      EscrevaL ("|                               |")
      EscrevaL ("| Ao chamar a Função Media()... |")
      EscrevaL ("|_______________________________|")
      Break()

FimProcedimento

//Funções

Funcao Situacao(X : Real) : Caracter
Inicio
      Se (X > 6 ) Entao
         Retorne ("APROVADO")
      FimSe
      
      Se (X > 5 ) e ( X < 6.1 ) Entao
         Retorne ("RECUPERAÇÃO")
      FimSe
      
      Se (X < 5.1 ) Entao
         Retorne ("REPROVADO")
      FimSe

FimFuncao

Funcao Media(A,B: Real) : Real
Inicio
      Retorne ( A + B ) / 2
FimFuncao

Inicio
      NavBar()

      Escreva("Digite a 1ª Nota: ")
      Leia(nota1)

      Escreva("Digte a 2ª Nota: ")
      Leia(nota2)

      med <- Media(nota1,nota2)
      situacion <- Situacao(med)
      
      Break()
      EscrevaL("A Média deste aluno é: ", med:2:1)
      EscrevaL("STATUS: ", situacion)

fimalgoritmo