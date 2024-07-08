algoritmo "62 "
var
idade,quantidadeIdades,maisIdade,contador:inteiro
resposta:caractere
mediaIdades:real
inicio
quantidadeIdades <- 0
maisIdade <- 0
resposta <- "S"
contador <- 0



Enquanto resposta = "S" Faca
Escreval("Digite uma idade: ")
Leia(idade)

   quantidadeIdades <- quantidadeIdades + idade
   contador <- contador + 1
   
   mediaIdades <-  quantidadeIdades / contador
   
   Se idade > 21 Entao
    maisIdade <- maisidade + 1
   FimSe
   
   

Escreval("Deseja continuar adicionando idades? (S ou N): ")
Leia(resposta)

FimEnquanto

Escreval("Quantidade de idades que foram digitadas: " ,contador)
Escreval("Média das idades digitadas: " ,mediaIdades)
Escreval("Quantidade de pessoas que tem acima de 21 anos: ",maisIdade)

fimalgoritmo