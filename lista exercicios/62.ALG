algoritmo "62"
var
idade,idades,maior,soma:inteiro
continuar:caracter
media:real

inicio

Enquanto (continuar <> "n")faca



   escreval("  Digite sua idade : ")
   leia(idade)

   escreval("  Deseja continuar = s( sim ) n( nao ) : ")
   leia(continuar)


   //quantas idades

   idades<- idades + 1
   

    //media


    soma <- soma + idade
    media <-  soma /idades





   //maior de 21
   
   se (idade >= 21) entao
      maior <- maior + 1
   FimSe
   
   
   

FimEnquanto
escreval (" Foram digitadas " , idades , " idades ")
escreval (maior , " pessoas são maiores de 21 anos ")

escreval (" A media das idades é " , media )
fimalgoritmo
