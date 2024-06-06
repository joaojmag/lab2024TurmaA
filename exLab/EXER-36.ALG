Algoritmo "Exer-36"

Var
 horas,pontos:inteiro
Inicio

  escreval ("ATIVIDADE FÍSICA POR PONTOS")
  escreval ("Quantas horas de exercícios você fez no mês?")
  leia (horas)

  se (horas<=10) entao
  pontos <- horas*2
     escreval ("Você ganhou ",pontos ," pontos esse mês")
     escreva  ("Você ganhou R$" ,pontos*0.05)
  senao
       se (horas>10) e (horas<=20)entao
       pontos <- horas*5
          escreval ("Você ganhou ",pontos ," pontos esse mês")
          escreva  ("Você ganhou R$" ,(pontos*0.05))
       senao
            se (horas>20) entao
            pontos <- horas*10
               escreval ("Você ganhou ",pontos ," pontos esse mês")
               escreva  ("Você ganhou R$" ,pontos*0.05)
            fimse
       fimse
  fimse





Fimalgoritmo