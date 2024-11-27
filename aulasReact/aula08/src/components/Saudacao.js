function Saudacao({nome}){
    
    function gerarSaudacao(nome2){
        return `Ola ${nome2}, tudo bem?`
    }

    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}
export default Saudacao