function Pessaoas({nome, idade, profissao,foto}) {
    return (
        <div>
            <img src={foto} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <hr/>
        </div>
    )
}
export default Pessaoas