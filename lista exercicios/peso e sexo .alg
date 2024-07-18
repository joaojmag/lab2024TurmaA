Algoritmo "semnome"

var

sexo:caracter
peso,PesoF,homemCem,mediaPeso:real
sexoF,cont:inteiro


Inicio

para cont <- 1 ate 3 faca



   Escreval (  "Digite seu SEXO = F_M :   ")
   leia (sexo)


   Escreval (  "Digite seu PESO  :   ")
   leia (peso)



   //mulheres

   se (  sexo = "F"   )  ou ( sexo = "f"  )  Entao
      sexoF <- sexoF + 1

   FimSe

     //media peso mulheres
     
   se (  sexo = "F"   )  ou ( sexo = "f"  )Entao
     PesoF <- PesoF + peso
     
     mediaPeso <- PesoF / sexoF
   FimSe



      //homem 100
    se (  sexo = "M"   )  ou ( sexo = "m"  )e (peso >= 100) entao
       homemCem <-  homemCem  + 1

    FimSe
       
       
       
       
FimPara

Escreval (  "Foram cadastradas  " , sexoF , " mulheres.")
escreval (  "a media das mulheres é " , mediaPeso )
escreval(  " tem  " , homemCem , " com mais de 100 kilos ")
Fimalgoritmo
