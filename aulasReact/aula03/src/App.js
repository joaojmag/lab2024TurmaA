import React from "react";

const Labers = (props) => {
  return (
    <div>
      <Sobre nome={props.nome}
        idade={props.idade} cargo={props.cargo}
      />

      <Social instagram={props.instagram} 
              youtube={props.youtube}
              gmail={props.gmail}
      />

      <hr />
    </div>
  );

}

const Sobre = (props) => {
  return (
    <div>
      <h3>Nome: {props.nome}</h3>
      <h3>Idade: {props.idade}</h3>
      <h3>Cargo: {props.cargo}</h3>
    </div>

  );
}

const Social = (props) => {
  return (
    <div>
      <a href={props.instagram}>Instagram </a>
      <a href={props.youtube}> YouTube </a>
      <a href={props.gmail}> Gmail </a>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Conheça os Labers: </h1>
      <hr />

      <Labers nome="Erika" idade="18" cargo="Front-end"
        instagram="https://www.instagram.com/"
        youtube="https://www.youtube.com/"
        gmail='https://mail.google.com'
      />

      <Labers nome="Anthony" idade="18" cargo="Dados"
        instagram="https://www.instagram.com/"
        youtube="https://www.youtube.com/"
        gmail='https://mail.google.com'

      />

      <Labers nome="Diogo" idade="18" cargo="Back-end"
        instagram="https://www.instagram.com/"
        youtube="https://www.youtube.com/"
        gmail='https://mail.google.com'
      />
      
    </div>
  );
}



export default App;
