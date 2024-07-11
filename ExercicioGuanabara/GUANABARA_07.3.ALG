Algoritmo "GUANABARA_07.3"

var

   massa, altura, imc: Real

inicio

      Escreval("Digite a Massa (Kg): ")
      Leia(massa)
      Escreva("Digite a Altura (m): ")
      Leia(altura)

      imc <- ( massa / ( altura ^ 2 ) )
      EscrevaL("IMC:", imc:5:2)

      Se (imc >= 18.5) e (imc < 25) entao
         Escreva("Você está em seu peso ideal!")
      Senao
         Escreva("Você não está na faixa de peso ideal!!")
      FimSe

fimalgoritmo