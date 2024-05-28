Algoritmo "07.3-GUANABARA"

//Aula #07.3 Guanabara "Cálculo IMC"

var

   massa, altura, imc: Real

inicio

      Escreval("Digite sua Massa (Kg): ")
      Leia(massa)
      Escreva("Digite sua Altura (m): ")
      Leia(altura)

      imc <- ( massa / ( altura ^ 2 ) )
      EscrevaL("IMC:", imc:5:2)
      
      Se (imc >= 18.5) e (imc < 25) entao
         Escreva("Você está em seu peso ideal!")
      Senao
         Escreva("Você não está na faixa de peso ideal!!")
      FimSe

fimalgoritmo