algoritmo "exercicio_34"
var

   massa, altura, IMC: Real
   
inicio

      Escreval("VAMOS CALCULAR SEU IMC.")
      Escreva("MASSA (KG): ")
      Leia(massa)
      Escreva("ALTURA (M): ")
      Leia(altura)
      
      IMC <- massa/(altura^2)
      
      Escreval("IMC: ", IMC:5:2)
      se (IMC >= 17) e (IMC < 18.5) entao
              Escreval("ABAIXO DO PESO.")
           senao
                se (IMC >= 18.5) e (IMC < 25) entao
                   Escreval("PESO IDEAL.")
                senao
                     se (IMC >= 25) e (IMC < 30) entao
                        Escreval("SOBREPESO.")
                     senao
                          se (IMC >= 35) e (IMC < 40) entao
                             Escreval("OBESIDADE.")
                          senao
                               Escreval("OBESIDADE MÓRBIDA.")
                          fimse
                     fimse
                fimse
           fimse


fimalgoritmo