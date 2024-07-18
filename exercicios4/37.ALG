Algoritmo "SemNome"
Var
    salarioAtual, novoSalario: real
    genero: caractere
    anosEmpresa: inteiro

Inicio
    Escreva("Digite o salário atual do funcionário: ")
    Leia(salarioAtual)

    Escreva("Digite o gênero do funcionário (M para mulher, H para homem): ")
    Leia(genero)

    Escreva("Digite há quantos anos o funcionário trabalha na empresa: ")
    Leia(anosEmpresa)

    Se genero = "M" Então
        Se anosEmpresa < 15 Então
            novoSalario <- salarioAtual * 1.05
        Senão
         Se anosEmpresa <= 20 Então
            novoSalario <- salarioAtual * 1.12
        Senão
            novoSalario <- salarioAtual * 1.23
        FimSe
    FimSe

    Senão
    Se genero = "H" Então
    Se anosEmpresa < 20 Então
    novoSalario <- salarioAtual * 1.03
    Senão
    Se anosEmpresa <= 30 Então
     novoSalario <- salarioAtual * 1.13
Senão
 novoSalario <- salarioAtual * 1.25
  FimSe
 FimSe

Escreva("O novo salário do funcionário é R$", novoSalario)
FimSe

FimAlgoritmo


