Algoritmo "velocidade"

Var

   velocidade:inteiro
   multa:real
   calculo:real

Inicio
    escreval("qual a velocidade do carro")
    leia (velocidade)
    
    //calculo

       Se velocidade >= 80  Entao
       calculo <-velocidade -80
       multa<- calculo * 5

    escreval("multa no valor de ", multa)
    senao
    escreval("muito bom")
   FimSe

Fimalgoritmo