Algoritmo "Exer-17"

Var
 km, multa: real

Inicio
    Escreval ("Qual velocidade do seu veículo?")
    Leia (km)
    se (km <=80) entao
    escreva ("Você não foi multado")
    fimSe
    se (km>80) entao
    Escreval ("Você foi multado.")
    multa <- (km - 80)*5
    Escreva ("Você deve pagar R$",multa)
    fimSe
Fimalgoritmo