Algoritmo "08.2-GUANABARA"

//Aula #08.2 Guanabara "IMC Plus"


var

   massa, altura, imc: Real

inicio

      Escreval("Digite sua Massa (Kg): ")
      Leia(massa)
      Escreva("Digite sua Altura (m): ")
      Leia(altura)

      imc <- ( massa / ( altura ^ 2 ) )
      EscrevaL("IMC:", imc:5:2)
      
      Se (imc < 17) entao
           EscrevaL ("Muito Abaixo do Peso!")
      Senao
          Se (imc >= 17) e (imc < 18.5) entao
            EscrevaL("Abaixo do Peso!")
          Senao
              Se (imc >= 18.5) e (imc < 25) entao
                 EscrevaL("Peso ideal!!")
              Senao
                  Se(imc >= 25) e (imc < 30) entao
                      Escreva("Sobrepeso")
                  Senao
                      se (imc >= 30) e (imc < 35) entao
                        EscrevaL ("Obesidade")
                      Senao
                          Se (imc >= 35) e (imc < 40) entao
                             EscrevaL ("Obesidade Servera")
                          Senao
                             Escreva("Obesidade Morbida")
                   FimSe
               FimSe
            FimSe
         FimSe
      FimSe
    FimSe
fimalgoritmo
