Algoritmo "SemNome"
Var
horasAtividade, pontos: inteiro
dinheiroGanho: real

Inicio
Escreva("Digite quantas horas de atividade física você teve no mês: ")
Leia(horasAtividade)

Se horasAtividade <= 10 Então
pontos <- horasAtividade * 2
Senão
Se horasAtividade <= 20 Então
 pontos <- horasAtividade * 5
Senão
pontos <- horasAtividade * 10
 FimSe
FimSe

dinheiroGanho <- pontos * 0.05


Escreval("Você acumulou ", pontos, " pontos.")
Escreval("Você ganhou R$", dinheiroGanho)

FimAlgoritmo
