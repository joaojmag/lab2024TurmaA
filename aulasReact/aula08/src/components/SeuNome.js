import { useState } from "react"

function SeuNome({setNome}){
    return(
        <>
            <h1>Digite seu nome</h1>
            <label>Qual seu nome? </label>
            <input 
                type="text" 
                placeholder="Digite seu nome" 
                onChange={(e)=>setNome(e.target.value)}
            />
        </>
    )
}

export default SeuNome