Algoritmo "Ex8"

//8) Desenvolva um programa que leia uma distância em metros e mostre os valores
//relativos em outras medidas.

Var

  num : Real

Inicio

      Escreva("Escolha uma distância em metros: ")
      Leia(num)

      Escreval("A distância de", num, "m corresponde a:")
      Escreval((num/1000),"Km")
      Escreval((num/100),"Hm")
      Escreval((num/10),"Dam")
      Escreval((num*10),"Dm")
      Escreval((num*100),"Cm")
      Escreval((num*1000),"mm")

Fimalgoritmo
