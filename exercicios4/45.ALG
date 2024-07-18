Algoritmo "sem nome"

Var
   primeiroValor, ultimoValor, incremento, valorAtual: inteiro;

Inicio

Escreva("Digite o primeiro Valor: ")
Leia(primeiroValor)
Escreva("Digite o último Valor: ")
Leia(ultimoValor)
Escreva("Digite o incremento: ")
Leia(incremento)


   valorAtual <- primeiroValor

Escreva("Contagem: ")


   Se primeiroValor <= ultimoValor Entao

      Enquanto valorAtual <= ultimoValor Faca
         Escreva(valorAtual, " ")
         valorAtual <- valorAtual + incremento
      FimEnquanto
   Senao
      Enquanto valorAtual >= ultimoValor Faca
         Escreva(valorAtual, " ")
         valorAtual <- valorAtual - incremento
      FimEnquanto
   FimSe

   Escreval("Acabou!")
FimAlgoritmo.


