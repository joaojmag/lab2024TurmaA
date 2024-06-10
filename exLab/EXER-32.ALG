Algoritmo "Exer-32"

Var
 numero, sorteio: inteiro

Inicio
   Escreval ("Vamos descobrir qual número foi sorteado?")
   Escreva  ("Digite um número: ")
   leia (numero)



   sorteio <- (Randi(5)+1)

   
   se (sorteio=numero) entao
     escreval ("O número sorteado foi: ",sorteio)
     escreva  ("Parabéns, você descobriu!")
     
     senao
        escreval ("O número sorteado foi: ",sorteio)
        escreva  ("Não foi dessa vez que você descobriu.")
   fimse

Fimalgoritmo