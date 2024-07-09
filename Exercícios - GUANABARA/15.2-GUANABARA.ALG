Algoritmo "15.2-GUANABARA"

//Aula #15.2 Guanabara "Preencher uma Matriz 3x3 e Mostrar os pares"

var
   mat : vetor[1..3, 1..3] de Inteiro
   linha, coluna, totPar : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ____________________" )
      EscrevaL ("|                    |")
      EscrevaL ("|  Ler Matriz 3 X 3  |")
      EscrevaL ("| Mostrando os Pares |")
      EscrevaL ("|____________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      Para linha <- 1 ate 3 faca
           Para coluna <- 1 ate 3 faca
                Escreva("Digite um valor da posição[",linha, ",",coluna,"]:")
                Leia(mat[linha,coluna])
           FimPara
      FimPara

      EscrevaL()
      EscrevaL("MATRIZ:")
      EscrevaL("-------------")
      Para linha <- 1 ate 3 faca
           Para Coluna <- 1 ate 3 faca
                Se( mat[linha,coluna] % 2 = 0 ) entao
                    Escreva("{", mat[linha,coluna]:2,"}")
                    totPar <- totPar +1
                Senao
                     Escreva (mat[linha,coluna]:4)
                FimSe
           FimPara
           EscrevaL()
      FimPara
      EscrevaL()
      EscrevaL("O total de Pares na Matriz é:", totPar)

fimalgoritmo