
import React, {Component} from 'react';
import firebase from "./Firebase";
import "./estilos/estilos.css";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        nome: "",
        sobrenome: "",
        dados:[]
    }

    this.gravar = this.gravar.bind(this);
    this.listar = this.listar.bind(this);
  }


  gravar(){
    firebase.firestore().collection("usuario").add({
      nome: this.state.nome,
      sobrenome: this.state.sobrenome
    });
  }

  listar(){
    firebase.firestore().collection("usuario").get().then((retorno) => {
      var state = this.state;
      retorno.forEach((item) => {
    
        state.dados.push({
          id: item.id,
          nome: item.data().nome,
          sobrenome: item.data().sobrenome
        });

      });
      this.setState(state);
    });
  }



  render(){
    return(
      <div>

        <h1>Exercício Firestore</h1>
        <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})} /> <br/>
        <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})} /> <br/>
        <button onClick={this.gravar}>Gravar</button> <br/><br/><br/>

        <button onClick={this.listar}>Listar</button> <br/>

        <ul>
            {this.state.dados.map((item)=>{
              return(
                <li> {item.nome + " " + item.sobrenome} </li> 
              )
            })}
        </ul>

      </div>
    )
  }
}

export default App;
