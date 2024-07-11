Algoritmo "15.5-GUANABARA"

//Aula #15.5 Guanabara " Dissecando Matrizes "

var
   mat : vetor[1..4, 1..4] de Inteiro
   lin, col, opcao, continue : Inteiro

//Procedimentos

Procedimento NavBar()
Inicio
      LimpaTela
      EscrevaL (" _____________________" )
      EscrevaL ("|                     |")
      EscrevaL ("| Dissecando Matrizes |")
      EscrevaL ("|_____________________|")
      EscrevaL (" ")

FimProcedimento

Inicio
      NavBar()
      
      Para lin <- 1 ate 4 faca
           Para col <- 1 ate 4 faca
                Escreva("Digite o valor da Posição [", lin, ",", col,"]: ")
                Leia(mat[lin,col])
           FimPara
      FimPara
      
      LimpaTela
      Enquanto ( continue <> 5 ) faca
      
         EscrevaL()
         EscrevaL("MENU DE OPÇÕES")
         EscrevaL("=======================")
         EscrevaL(" [1] Mostrar a Matriz ")
         EscrevaL(" [2] Diagonal Principal ")
         EscrevaL(" [3] Triãngulo Superior ")
         EscrevaL(" [4] Triângulo Inferior ")
         EscrevaL(" [5] Sair ")
         EscrevaL("======= OPÇÃO:")
         Leia(opcao)
         EscrevaL()
         
         Escolha Opcao

                 Caso 1

                      Para lin <- 1 ate 4 faca
                           Para Col <- 1 ate 4 faca
                                Escreva (mat[lin,col]:4)
                           FimPara
                           EscrevaL()
                      FimPara

                 Caso 2

                      Para lin <- 1 ate 4 faca
                           Para Col <- 1 ate 4 faca
                                Se (lin = col ) entao
                                   Escreva (mat[lin,col]:4)
                                Senao
                                   Escreva(" ")
                                FimSe
                           FimPara
                           EscrevaL()
                      FimPara

                 Caso 3
                 
                      Para lin <- 1 ate 4 faca
                           Para Col <- 1 ate 4 faca
                                Se (lin < col )  entao
                                   Escreva (mat[lin,col]:4)
                                FimSe
                           FimPara
                           EscrevaL()
                      FimPara
                      
                 Caso 4

                      Para lin <- 1 ate 4 faca
                           Para Col <- 1 ate 4 faca
                                Se (lin > col )  entao
                                   Escreva (mat[lin,col]:4)
                                FimSe
                           FimPara
                           EscrevaL()
                      FimPara
                      
                 Caso 5
                      LimpaTela
                      EscrevaL("Fim do Programa!!")
                      continue <- 5
                 OutroCaso
                          EscrevaL("Dígito Inválido! Fim do Programa!!")
                          FimAlgoritmo
                      
         FimEscolha
         
      FimEnquanto

fimalgoritmo