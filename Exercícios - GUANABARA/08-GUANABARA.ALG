Algoritmo "08-GUANABARA"

//Aula #08 Guanabara "Média do Aluno"

var

   nota1, nota2, media: Real

inicio

      Escreval("Digite a Primeira Nota: ")
      Leia(nota1)
      Escreva("Digite a Segunda Nota: ")
      Leia(nota2)

      media <- ( ( nota1 + nota2 ) / 2 )
      EscrevaL("A média deste aluno é:", media:4:1)

      Se (media >=7) entao
         EscrevaL("Aluno APROVADO! ")
      Senao
         Se (media >= 5 ) e (media < 7 )entao
            EscrevaL("Aluno está de Recuperação")
         Senao
            EscrevaL("Aluno Reprovado!")
         FimSe
      FimSe

fimalgoritmo