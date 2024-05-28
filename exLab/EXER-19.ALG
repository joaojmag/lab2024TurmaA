algoritmo "Exer-19"
var
  nome:caractere
  nota1, nota2: inteiro
  media: real
inicio
   Escreva ("Qual nome do aluno? ")
   Leia (nome)
   Escreva ("Qual a nota dele? ")
   Leia (nota1)
   Escreva ("Qual a outra nota? ")
   Leia (nota2)
   media <- (nota1 + nota2)/2
   Escreval ("A média das notas são: ",media)
   se media > 7 entao
      escreva ("Parabéns, você está acima da média")
   senao
              se media =7 entao
                escreva ("Você está na média")
              senao
                escreva ("Você está abaixo da média")
                fimse
   fimSe
fimalgoritmo
