Algoritmo "Ex56"

//56) Crie um programa que leia vários números pelo teclado e mostre no final o
//somatório entre eles.
//Obs: O programa será interrompido quando o número 1111 for digitado

Var

   num, soma: inteiro

inicio

      EscrevaL (" ________________________________________________" )
      EscrevaL ("|                                                |")
      EscrevaL ("| Escolha números para somar e 1111 para  parar  |")
      EscrevaL ("|________________________________________________|")
      EscrevaL (" ")

      Enquanto ( num <> 1111 ) faca

      Escreva("Digite um número para Somar: ")
      Leia(num)
      soma <- soma + num

      Se ( num = 1111 ) entao

         soma <- soma - 1111
         EscrevaL("A soma dos números digitados é:", soma)
         fimalgoritmo
      FimSe

      FimEnquanto

fimalgoritmo