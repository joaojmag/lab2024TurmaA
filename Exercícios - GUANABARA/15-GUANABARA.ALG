Algoritmo "15-GUANABARA"

//Aula #15 Guanabara "Preencher uma Matriz 3x2 com Valores via Teclado"

var
   mat : vetor[1..3, 1..2] de Inteiro
   linha, coluna : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________" )
      EscrevaL ("|                    |")
      EscrevaL ("|  Ler Matriz 3 X 2  |")
      EscrevaL ("|____________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para linha <- 1 ate 3 faca
           Para coluna <- 1 ate 2 faca
                Escreva("Digite um valor:")
                Leia(mat[linha,coluna])
           FimPara
      FimPara
      
      Para linha <- 1 ate 3 faca
           Para Coluna <- 1 ate 2 faca
                Escreva (mat[linha,coluna]:4)
           FimPara
           EscrevaL()
      FimPara

fimalgoritmo