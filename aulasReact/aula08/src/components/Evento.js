import Button from "./evento/Button";

function Evento (){
    
    function meuEvento(){
        console.log(`Ola 007`);
    }
    
    return(
        <>
            <p>Clique para disparar um Evento</p>
            <Button event={meuEvento} text='Primeiro Evento'/>
{/*         <button onClick={meuEvento}> Ativar </button> */}
        </>
    )
}
export default Evento