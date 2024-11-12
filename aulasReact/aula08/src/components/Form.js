function Form() {
    function cadastrarUsuario(){
        console.log("Simmm");
    }
    
    return (
        <>
            <h1>Cadastro Lab</h1>
            <Form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome:" />
                </div>
                <div>
                    <input type="submit" value='Cadastrar' />
                </div>
            </Form>
        </>
    )
}

export default Form