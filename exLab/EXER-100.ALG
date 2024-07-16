Algoritmo "Exer-100"

Var
valor1, valor2: inteiro
resposta, resultado: real
resposta2: caractere
//================================================
funcao media (a, b: inteiro): real
inicio
   retorne (a + b)/2

fimFuncao
//================================================
funcao situacao(n : inteiro): caractere
inicio
   se (n >= 6) entao
      retorne ("APROVADO!! Parabéns.")
   senao
      se (n < 6) e (n >= 4) entao
         retorne ("RECUPERAÇÃO. Estude mais.")
      seNao
         retorne ("RECUPERAÇÃO. Até ano que vem")
      fimSe
   fimSe
fimFuncao
//================================================
Inicio

   escreval ("FUNÇÃO - MÉDIA PLUS")
   escreval ()
   escreval ("   Vamos calcular a média de duas notas!!")
   escreval ()
   escreva ("Digite a primeira nota: ")
   leia (valor1)
   escreva ("Digite a segunda nota: ")
   leia (valor2)

   resposta <- media(valor1, valor2)
   limpaTela
   
   escreval ("A média das notas é: ", resposta)
   resultado <- resposta
   resposta2 <- situacao (resultado)

   escreval ("O aluno foi: ", resposta2)

   
Fimalgoritmo