import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);

  }

  aumentar() {
    console.log("Aumentou!");

    let state = this.state;
    state.contador += 1;
    this.setState(state);
  }

  diminuir() {
    console.log("Diminuiu!");

    let state = this.state;
    state.contador -= 1;
    this.setState(state);
  }

  render() {
    return (
      <div className="painel">
        <br />
        <button onClick={this.aumentar} className="botao-aumentar">+</button>
        <button onClick={this.diminuir} className="botao-diminuir">-</button><br /><br />
        <label className="resultado">{this.state.contador}</label>
      </div>
    )
  }

}

export default App;
