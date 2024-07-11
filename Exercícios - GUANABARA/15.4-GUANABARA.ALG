Algoritmo "15.4-GUANABARA"

//Aula #15.4 Guanabara " Preeencher uma Matriz Identidade de 4ª Ordem"
// A Soma dos Valores da Diagonal Principal
// O Produto entre os Valores da 2ª Linha
// O Maior Valor da 3ª Coluna

var
   mat : vetor[1..4, 1..4] de Inteiro
   lin, col, somaDiagPrinc, prod2lin, mais3col : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" ___________________" )
      EscrevaL ("|                   |")
      EscrevaL ("| Matriz Identidade |")
      EscrevaL ("|    De 4ª Ordem    |")
      EscrevaL ("|___________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()

      somaDiagPrinc <- 0
      prod2lin <- 1
      
      Para lin <- 1 ate 4 faca
           Para col <- 1 ate 4 faca
                Escreva("Digite o valor da Posição [", lin, ",", col,"]: ")
                Leia(mat[lin,col])
                Se (lin = col )  entao
                   somaDiagPrinc <- somaDiagPrinc + mat[lin,col]
                FimSe
           FimPara
      FimPara
      
      Para lin <- 1 ate 4 faca
           Para Col <- 1 ate 4 faca
                Escreva (mat[lin,col]:4)
           FimPara
           EscrevaL()
      FimPara
      
      Para col <- 1 ate 4 faca
           prod2lin <- prod2lin * mat[2,col]
      FimPara
      
      Para lin <- 1 ate 4 faca
           Se ( mat[lin,3] > mais3col ) entao
              mais3col <- mat[lin,3]
           FimSe
      FimPara
      
      EscrevaL("A soma dos valores da Diagonal Principal é: ", somaDiagPrinc)
      EscrevaL("O Produto da 2ª Linha é: ", prod2lin)
      EscrevaL("O Maior Valor da 3ª Coluna é: ", mais3col)
      
fimalgoritmo