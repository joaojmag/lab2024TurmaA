Algoritmo "Ex8"

//8) Desenvolva um programa que leia uma distância em metros e mostre os valores
//relativos em outras medidas.

Var

  Num : Real

Inicio

      Escreva("Escolha uma distância em metros: ")
      Leia(Num)

      Escreval("A distância de", Num, "m corresponde a:")
      Escreval((Num/1000),"Km")
      Escreval((Num/100),"Hm")
      Escreval((Num/10),"Dam")
      Escreval((Num*10),"Dm")
      Escreval((Num*100),"Cm")
      Escreval((Num*1000),"mm")

Fimalgoritmo