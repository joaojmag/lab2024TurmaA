algoritmo "exercicio_26"
var
   numero1, numero2: real
inicio
      Escreval("Vamos brincar de comparação de valores!")
      Escreva("Digite um número: ")
      Leia(numero1)
      Escreva("DIgite outro número: ")
      Leia(numero2)
      
      se (numero1 = numero2) entao
        Escreval("Não existe valor maior,", numero1, " e", numero2, " são iguais")
      fimse

      se (numero1 > numero2) entao
        Escreval("O número", numero1, " é maior que o número", numero2)
      fimse

      se (numero1 < numero2) entao
         Escreval("O número", numero2, " é maior que o número", numero1)
      fimse
      
fimalgoritmo