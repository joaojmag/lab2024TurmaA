Algoritmo "semnome"

Var

  distancia,valorpassagem,valordapassagem:real

Inicio
   Escreva("Digite a distância da viagem : ")
    Leia(distancia)

      Se distancia <= 200 Então
        valorpassagem <- distancia * 0.50
            Escreva("O preço da passagem é ", valorpassagem )
    Senão
        valordapassagem <- distancia * 0.45
            Escreva("O preço da passagem é ", valordapassagem )
    FimSe
Fimalgoritmo