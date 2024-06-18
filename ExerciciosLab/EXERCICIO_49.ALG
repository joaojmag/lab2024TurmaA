algoritmo "exercicio_49"
var

    n, s, cont, nPar, nImpar: inteiro

inicio

     s <- 0
     cont <- 1
     Enquanto (cont <= 6) faca
       Escreva("Digite o ", cont, "o. valor: ")
       Leia(n)
              
       cont <- cont + 1
       
     se (n%2=0) entao
        nPar <- nPar + 1
     senao
          se (n%2=1) entao
             nImpar <- nImpar + 1
     fimse
     fimse
     FimEnquanto
     Escreva("Os número selecionados", nPar, " são pares e", nImpar, " são ímpares.")
     
fimalgoritmo