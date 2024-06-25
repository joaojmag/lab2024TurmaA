Algoritmo "Exer-55"

Var
contador: inteiro
numero, sorteio: inteiro
Inicio
   contador <- 1
   Escreval ("Vamos descobrir qual número foi sorteado?")
   escreval ("VOCÊ TERÁ 4 TENTATIVAS. ENTRE 1 a 10")
   
   enquanto (contador<=4) faca
      escreva  ("Digite um número: ")
      leia (numero)
      escreva (contador, "° número sorteado foi: ")

      aleatorio 0, 10
      leia (sorteio)
      aleatorio off
      
      se (numero=sorteio) entao
         escreval (" Parabéns, você descobriu!")
         senao
            escreval  ("Não foi dessa vez que você descobriu.")
      fimse
      
      contador <- contador +1
   fimEnquanto



Fimalgoritmo