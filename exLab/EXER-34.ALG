Algoritmo "Exer-34"

Var
 peso, altura, imc: real


Inicio
      escreval ("Calculando IMC:")
      escreva  ("Qual seu peso (Kg)? ")
      leia (peso)
      escreva  ("Qual sua altura (m)? ")
      leia (altura)

      imc <- peso/altura^2

      escreval  ("IMC: ",imc:6:2)
      
      se (imc<18.5) entao
         escreva ("Você está abaixo do peso")
      senao
           se (imc>=18.5) e (imc<25) entao
              escreva ("Você está com o peso ideal")
           senao
                se (imc>=25) e (imc<30) entao
                   escreva ("Você está com sobrepeso")
                senao
                     se (imc>=30) e (imc<40) entao
                        escreva ("Você está obeso")
                     senao
                          se (imc>=40) entao
                             escreva ("Você está com obesidade mórbida")
                          fimse
                       fimse
                  fimse
           fimse
      fimse
      


Fimalgoritmo