Algoritmo "Ex49"

//49) Crie um programa que leia 6 números inteiros e no final mostre quantos deles
//são pares e quantos são ímpares.

Var
   num, cont, par, impar : Inteiro

inicio

      EscrevaL (" _____________________________________" )
      EscrevaL ("|                                     |")
      EscrevaL ("| Quantos são Números Pares e Ímpares |")
      EscrevaL ("|_____________________________________|")
      EscrevaL (" ")

      Repita
            Escreva(" Digite um número: ")
            Leia(num)
            
            Se (num % 2 = 0) entao
            
               par <- par + 1
               cont <- cont + 1
               
            Senao
                 impar <- impar +1
                 cont <- cont + 1
            FimSe
            
      Ate( cont >= 6 )
      
      EscrevaL (par, " dos números informados são números Pares!")
      EscrevaL (impar, " dos números informados são números Ímpares!")

fimalgoritmo
