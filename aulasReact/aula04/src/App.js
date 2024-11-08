import React, {Component} from "react";
class Labers extends Component{
  render(){
    return(
      <div>
        <Propriedades nome={this.props.nome}
        idade={this.props.idade} cargo={this.props.cargo}/> 
        
        <Social instagram={this.props.instagram}/>
        <hr/>
      </div>
    );
  }
}
class Propriedades extends Component{
  render(){
    return(
      <div>
        <h2> Nome: {this.props.nome} </h2>
        <h2> Idade: {this.props.idade} </h2>
        <h2> Cargo: {this.props.cargo} </h2>
      </div>
    );
  }
}

const Social=(props)=>{
  return (
    <div>
      <a href={props.instagram}>Instagram</a>
      <a> Facebook</a>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Conheça os Labers</h1>
      <Labers nome="Erika" idade="18" cargo="Front-end"
            instagram="https://www.instagram.com/"/>

      <Labers nome="Yasmin" idade="16" cargo="Front-end"
            instagram="https://www.instagram.com/"/>
    </div>
  );
}

export default App;
