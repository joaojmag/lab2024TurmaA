algoritmo "exercicio_8"
var
   distancia, d_km, d_hm, d_dam, d_dm, d_cm, d_mm : Real
inicio
      Escreva("Digite uma distância em metros: ")
      Leia(distancia)
      d_km <- distancia/1000
      d_hm <- distancia/100
      d_dam <- distancia/10
      d_dm <- distancia*10
      d_cm <- distancia*100
      d_mm <- distancia*1000
      Escreval("A distancia de ", distancia, "m corresponde a:")
      Escreval(d_km, "km")
      Escreval(d_hm, "hm")
      Escreval(d_dam, "dam")
      Escreval(d_dm, "dm")
      Escreval(d_cm, "cm")
      Escreval(d_mm, "mm")
fimalgoritmo