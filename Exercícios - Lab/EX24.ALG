Algoritmo "Ex24"

//24) Faça um algoritmo que pergunte a distância que um passageiro deseja
//percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
//viagens até 200Km e R$0.45 para viagens mais longas.

Var

   distanciaEscolhida, mais200km , menos200km : real

inicio

      EscrevaL("Descubra o preço da passagem para sua viagem!")
      EscrevaL(" ")
      EscrevaL("Quantos Km serão sua viagem? ")
      Leia(distanciaEscolhida)

      Se (distanciaEscolhida <= 200) entao
         menos200km <- (distanciaEscolhida*0.50)
         EscrevaL("Sua passagem custa: R$", menos200km:4:2, ".")
      Senao
         mais200km <- (distanciaEscolhida*0.45)
          EscrevaL("Sua passagem custa: R$", mais200km:4:2 , ".")
      FimSe

fimalgoritmo