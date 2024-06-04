Algoritmo "Exer-27"

Var
n1, n2, media: real

Inicio
 Escreval ("Vamos calcular a média dos alunos?")
 Escreval  ("Digite uma nota: ")
 leia (n1)
 Escreval  ("Digite outra nota: ")
 leia (n2)
 
 media <- (n1+n2)/2
 Escreval ("A média desse aluno é: ",media:6:1)
 
 se (media>=7) entao
    Escreva ("Aluno APROVADO")

 senao
      se (media>=5) e  (media<7) entao
        Escreval("Aluno de RECUPERAÇÃO")
      senao
           escreval ("Aluno REPROVADO ")
      fimSe
 fimSe


Fimalgoritmo