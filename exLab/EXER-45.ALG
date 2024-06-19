Algoritmo "Exer-45"

Var
 valor, final, salto: inteiro



Inicio

      Escreval ("Vamos fazer uma contagem:")
      Escreva  ("Digite o valor inicial: ")
      leia (valor)
      escreva  ("Digite o valor final: ")
      leia (final)
      escreva  ("Qual valor do salto: ")
      leia (salto)
      
      enquanto  (final <= valor) faca
                escreval (valor)
                valor <- valor - salto
      fimEnquanto
      
      
      enquanto (valor <=final) faca
               escreval (valor)
               valor <- valor + salto
      fimEnquanto
      
      
      escreva  ("Acabou!")

Fimalgoritmo