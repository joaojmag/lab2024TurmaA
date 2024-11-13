import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        console.log(`Parabens Certinhooo ${email}`);
    }
    return (
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </form>
            <button type="submit" onClick={enviarEmail}>Enviar email</button>
        </div>
    )
}
export default Condicional