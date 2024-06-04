Algoritmo "MultaVelocidade"
Var
   velocidade,multa,excesso: Real

Inicio
Escreva("Digite a velocidade em que está em Km/h: ")
Leia(velocidade)

Se velocidade >=80 Então
excesso <- velocidade - 80
multa <- excesso * 5
 Escreva("Você foi multado!")
 Escreva("Excesso de velocidade: ", excesso, " Km/h")
 Escreva("Valor da multa: R$", multa)
Senao
      Escreva("Velocidade dentro do limite permitido.")
   FimSe
FimAlgoritmo
