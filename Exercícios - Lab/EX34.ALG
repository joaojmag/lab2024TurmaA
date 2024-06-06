Algoritmo "Ex34"

//34) O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
//peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
//indivíduo dentro de certas faixas.
//- abaixo de 18.5: Abaixo do peso
//- entre 18.5 e 25: Peso ideal
//- entre 25 e 30: Sobrepeso
//- entre 30 e 40: Obesidade
//- acima de 40: Obseidade mórbida

Var

   massa, altura, imc: Real

inicio

      Escreval("Digite sua Massa (Kg): ")
      Leia(massa)
      Escreva("Digite sua Altura (m): ")
      Leia(altura)

      imc <- ( massa / ( altura ^ 2 ) )
      EscrevaL("IMC:", imc:5:2)

      Se (imc < 18.5) entao
           EscrevaL (" Abaixo do Peso!")
      Senao
          Se (imc >= 18.5) e (imc < 25) entao
            EscrevaL(" Peso Ideal!")
          Senao
              Se (imc >= 25) e (imc < 30) entao
                 EscrevaL(" Sobrepeso!")
              Senao
                  Se(imc >= 30) e (imc < 40) entao
                      EscrevaL(" Obesidade!")
                  Senao
                      se (imc >= 40) entao
                        EscrevaL (" Obesidade Mórbida!")
               FimSe
            FimSe
         FimSe
      FimSe
    FimSe
fimalgoritmo
