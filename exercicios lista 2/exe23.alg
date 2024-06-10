Algoritmo "semnome"

var
    ano_nascimento, idade,faltam:inteiro
Inicio


 Escreva("Digite o seu  ano de nascimento : ")
Leia(ano_nascimento)

   idade <- 2024 - ano_nascimento


   Se (idade < 18)Então
      faltam <- idade -18
    Escreva("Faltam ", faltam , " anos para o alistamento militar.")
   Senão (idade > 18) Então
   faltam <- idade -18
        Escreva("Já se passaram ",faltam , " anos do alistamento militar.")
         FimSe
Fimalgoritmo
