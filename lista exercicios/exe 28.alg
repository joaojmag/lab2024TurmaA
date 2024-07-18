Algoritmo "semnome"


 var
 
 largura, comprimento, area: real


Inicio

    escreva("Digite a largura do terreno : ")
     leia(largura)
     
      escreva("Digite o comprimento do terreno : ")
    leia(comprimento)
     
               //calculando
       area <- largura * comprimento
       escreva("A área do terreno é: ", area, " m²")

           se area < 100 então
        escreva(" - terreno popular")
    senao se area >= 100 e area <= 500 então
        escreva(" - terreno master")
    senao >500
        escreva(" - terreno vip")
    fimse
       
Fimalgoritmo
