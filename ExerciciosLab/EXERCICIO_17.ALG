algoritmo "exercicio_17"

var

   velocidade, multa: real
   
inicio

   Escreva("Qual a velocidade que você estava se movimentando?: ")
   Leia(velocidade)
   
   multa <- (velocidade-80)*5
   
   se velocidade>=80 entao
      Escreval("Opa, toma aqui uma multa de ", multa, " reais pra parar de ser bobo")
      Escreva("Vê se para de correr na estrada rapaz")
   fimse
   
   se velocidade<80 entao
      Escreva("Pode seguir tranquilo")
   fimse
   
fimalgoritmo