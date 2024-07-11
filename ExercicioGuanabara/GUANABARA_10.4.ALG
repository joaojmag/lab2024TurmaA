Algoritmo "GUANABARA_10.4"


var

   num, cont, contaDiv : Inteiro

inicio

      cont <- 1
      contaDiv <- 0

      Escreva("DIGITE UM NÚMERO: ")
      Leia(num)

      Repita
            Se (num / cont = 0) entao
               contaDiv <- contaDiv + 1
            fimSe
            cont <- cont + 1
            
      ate (cont > num )
      se (contaDiv > 2 ) entao
         Escreval ("O NÚMERO", num, " NÃO É PRIMO!")
      senao
           Escreval ("O NÚMERO", num, " É PRIMO!")
      fimSe

fimalgoritmo