Algoritmo "Exer-10"

Var

 l, h, A, litros:real

Inicio
  Escreva ("Digite a largura: ")
  leia (l)
  Escreva ("Digite a altura: ")
  leia (h)
  A <-l*h      //conta da área que precisa ser pintada
  escreval ("Área é: ", A, "m²")
  litros <- A/2   //a cada 2 metros quadrados se gasta 1 litro, então dividimos a área por dois
  escreva ("Será necessário " ,litros, " litros de tinta para pintar essa parede." )




Fimalgoritmo