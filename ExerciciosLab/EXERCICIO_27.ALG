algoritmo "exercicio_27"
var
   nota1, nota2, media: real
inicio
      Escreval("Vamos calcular a sua média durante esse ano.")
      Escreva("Digite a sua primeira nota: ")
      Leia(nota1)
      Escreva("Digite a sua segunda nota: ")
      Leia(nota2)
      
      media <- (nota1+nota2)/2
      
      se (media >= 7.0) entao
        Escreval("SUA MÉDIA FOI", media)
        Escreva("VOCÊ FOI APROVADO.")
      fimse
      
      se (media >= 5.0) e (media <= 6.9) entao
        Escreval("SUA MÉDIA FOI", media)
        Escreva("VOCÊ ESTÁ DE RECUPERAÇÃO.")
         senao
           Escreval("SUA MÉDIA FOI", media)
           Escreva("VOCÊ FOI REPROVADO.")
      fimse
      
fimalgoritmo