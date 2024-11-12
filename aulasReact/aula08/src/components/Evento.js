function Evento ({numero}){
    
    function meuEvento(){
        console.log(`Ola  ${numero} `);
    }
    
    return(
        <>
            <p>Clique para disparar um Evento</p>
            <button onClick={meuEvento}> Ativar </button>
        </>
    )
}
export default Evento