Algoritmo "GUANABARA_08.1"

var

   n1, n2, media: Real

inicio

      Escreval("Digite a primeira nota: ")
      Leia(n1)
      Escreva("Digite a segunda nota: ")
      Leia(n2)

      media <- ((n1 + n2)/2)
      EscrevaL("A média deste aluno é:", media:4:1)

      Se (media >=7) entao
         EscrevaL("Aluno APROVADO! ")
      Senao
         Se (media >= 5 ) e (media < 7 )entao
            EscrevaL("Aluno está de Recuperação")
         Senao
            EscrevaL("Aluno REPROVADO!")
         FimSe
      FimSe

fimalgoritmo