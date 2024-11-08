import React from "react";
const BemVindo = (props) => {
  return (
    <div>
      <h3>Bem Vindo {props.nome}</h3>
      <h4> Você tem {props.idade} anos</h4>
    </div>
  );
}
function App() {
  return (
    <div>
      Olá Mundo!!!
      <BemVindo nome="Erika" idade="18" />
      <h1>Curso React</h1>
    </div>
  );
}

export default App;
