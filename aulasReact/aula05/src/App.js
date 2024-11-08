import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Erika",
      contador: 0
    }
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this)
  }

  aumentar() {
    let state = this.state;
    state.contador ++;
      this.setState(state)
  }

  diminuir(){
    let state = this.state;
    state.contador --;
    if(state.contador === 0 ){
      alert("Você chegou a zero")
      return;
    }
    this.setState(state)
  }


  render() {
    return (
      <div>
        <h1>Contador</h1>

        <h4>
          <button onClick={this.diminuir} >Diminuir</button>
            {this.state.contador}
          <button onClick={this.aumentar}>Aumentar</button>
        </h4>

      </div>
    );
  }
}


export default App;
