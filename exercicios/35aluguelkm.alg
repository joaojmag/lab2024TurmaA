algoritmo "semnome"
var
carro,km,luxo,popular,dias_alugados,precopdois,precopum:real
precolum,precoldois:real
inicio
Escreval("BEM VINDO A LOCADORA DE CARRO!")
Escreval("-------------------------------")
Escreval("IREMOS CALCULAR O VALOR!")
Escreval("-------------------------")
Escreval("DIGA AS SEGUINTES INFORMAÇÕES:")
Escreval("------------------------------------")
Escreval("quantos kms você percorreu?")
Leia(km)
Escreval("---------------------------------")
Escreval("há quantos dias o carro ficou alugado?")
Leia(dias_alugados)
Escreval("-----------------------------------------")
Escreva("qual o tipo de carro? (P) para popular e (L) para luxo:")
Leia(carro)
   caso "P"
   precopum<-(km*0.20)+(dias_alugados*90)
   precopdois<-(km*0.10)+(dias_alugados*90)
   se (km<=100) entao
   Escreva("seu preço total foi ",precopum)
   senao se (km>100)entao
   Escreva("o seu preço total foi ",precopdois)
   fimse
   
   caso "L"
   precolum<-(km*0.30)+(dias_alugados*150)
   precoldois<-(km*0.25)+(dias_alugados*150)
   se (km<=200)entao
   Escreva("seu preço total foi ",precolum)
   senao se (km>200)entao
   Escreva("seu preço total foi ",precoldois)
   fimse
   
   fimalgoritimo
