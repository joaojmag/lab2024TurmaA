algoritmo "exercicio_21"

// Um ano é bissexto se ele for divisível por 400 ou se ele
//         for divisível por 4 e não por 100.
var
   ano : inteiro

inicio

   Escreva("DIGITE UM ANO? ")
   Leia(ano)

   se (ano mod 400 = 0) ou ((ano mod 4 = 0) e (ano mod 100 <> 0)) entao
      Escreval(ano, " É BISSEXTO!")
   senao
        Escreva("O ANO NÃO É BISSEXTO.")
   fimse

fimalgoritmo