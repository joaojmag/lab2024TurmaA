Algoritmo "GUANABARA_10.3"

var

   num, cont, fatorial: inteiro

inicio

      Escreva("DIGITE UM NÚMERO: ")
      Leia(num)

      cont <- num
      fatorial <- 1

      Repita
      fatorial <- fatorial * cont
      cont <- cont - 1
      ate (cont < 1)
      
      EscrevaL("O FATORIAL DE: ", num, " É", fatorial, ".")

fimalgoritmo