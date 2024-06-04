Algoritmo "Exer-28"

Var
 largura, comprimento, area: real

Inicio
  Escreval ("Vamos medir a área de um terreno")

  Escreva  ("Digite a largura desse terreno: ")
  leia (largura)
  
  Escreva  ("Digite o comprimento do terreno: ")
  leia (comprimento)
  
  area <- largura*comprimento

  se (area<100) então
     escreva ("Sua área é:",area, "m² - TERRENO POPULAR")
  senao
       se (area>=100) e (area<=500) entao
          escreva ("Sua área é:",area, "m² - TERRENO MASTER")
       senao
            escreva ("Sua área é: ", area, "m² - TERRENO VIP")
       fimSe
  fimSe
  
  
  
  
Fimalgoritmo