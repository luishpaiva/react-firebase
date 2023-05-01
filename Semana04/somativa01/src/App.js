import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    };

    this.mudaEmail = this.mudaEmail.bind(this);
    this.mudaSenha = this.mudaSenha.bind(this);
    this.verificar = this.verificar.bind(this);
  }

  mudaEmail(event) {
    let state = this.state;
    state.email = event.target.value;
    this.setState(state);
  }

  mudaSenha(event) {
    let state = this.state;
    state.senha = event.target.value;
    this.setState(state);
  }

  verificar() {
    if (this.state.email === 'paiva.l@pucpr.br' && this.state.senha === 'abcdef') {
      this.setState({mensagem: 'Acessado com sucesso!'});
    } else {
      this.setState({mensagem: 'Usuário ou senha incorretos!'});
    }
  }

  render() {
    return (
      <div className='login'>
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          onChange={(e) => this.mudaEmail(e)}
        /><br />
        <input
          type="password"
          name="senha"
          onChange={(s) => this.mudaSenha(s)}
        /><br />
        <button type="submit" onClick={this.verificar}>Acessar</button> <br /> <br />
        <label htmlFor="mensagem"> {this.state.mensagem} </label>
      </div>
    );
  }

}

export default App;
