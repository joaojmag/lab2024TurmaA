import { useState } from "react";

function Form() {
    const [nome, setNome] = useState()
    const [senha, setSenha] =  useState()
    
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário: ${nome}  / Senha: ${senha}`);
        console.log(nome);
        console.log(senha);

    }

    return (
        <>
            <h1>Cadastro Lab</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"> Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="name"
                        placeholder="Digite seu nome:"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        name="password"
                        placeholder="Digite sua senha:"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>

        </>
    )
}

export default Form