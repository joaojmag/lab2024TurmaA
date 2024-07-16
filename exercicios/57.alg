algoritmo "semnome"
var
salariofeminino,salariomasculino,salario:real
nome,sexo,continuar:caractere
inicio
Escreval("BEM VINDO A NOSSA EMPRESA!")
Escreval("===========================")
Escreval("nos conte as seguintes informações!")
Escreval("===================================")
Escreval("qual o seu nome?:")
Leia(nome)
continuar <- "S"

enquanto (continuar = "S") faca
   Escreval("qual o seu sexo? [F] ou [M]:")
   Leia(sexo)
   
   se (sexo = "M") entao
      Escreva("qual o seu salario?:")
      Leia(salariomasculino)
      salario <- salariomasculino + salariomasculino
   senao
      se (sexo = "F") entao
          Escreva("qual o seu salario?:")
          Leia(salariofeminino)
           salario <- salariofeminino + salariofeminino

   fimse
   fimse
   
   Escreva("você deseja continuar? (S/N)")
   Leia(continuar)
   

   
fimenquanto
Escreval("o salario dos homens é ",salariomasculino)
Escreva("o salario das mulheres é",salariofeminino)



fimalgoritmo
