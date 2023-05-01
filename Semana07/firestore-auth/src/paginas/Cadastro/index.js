import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import 'firebase/auth';

class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {

            //Auth
            email: "",
            senha: "",

            //Gravar
            nome: "",
            sobrenome: "",

            //Listar
            dados: []

        }

        this.gravar = this.gravar.bind(this);
        this.listar = this.listar.bind(this);
    }

    async gravar() {

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(async (retorno) => {

            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({

                nome: this.state.nome,
                sobrenome: this.state.sobrenome

            });

        });

        /*firebase.firestore().collection("usuario").add( {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome
        }); //criar com chave aleatória*/

        /*firebase.firestore().collection("usuario").doc("1").set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome
        });*/ //criar com uma chave específica

    }

    async listar() {
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

        })
    }

    render() {
        return (
            <div>
                <h1>Página de Cadastro</h1>
                <input type='text' placeholder='E-mail'onChange={ (e) => this.setState({email: e.target.value}) } />
                <br />
                <input type='password' placeholder='Senha'onChange={ (e) => this.setState({senha: e.target.value}) } />
                <br />
                <input type='text' placeholder='Nome'onChange={ (e) => this.setState({nome: e.target.value}) } />
                <br />
                <input type='text' placeholder='Sobreome'onChange={ (e) => this.setState({sobrenome: e.target.value}) } />
                <br />
                <button onClick={this.gravar}> Gravar </button>
                <br /><br />
                <button onClick={this.listar}> Listar Usuários </button>
                <br /><br />
                <ol>
                    {this.state.dados.map((item) => {
                        return(
                            <li> {item.nome + " " + item.sobrenome} </li>
                        )
                    })}
                </ol>
                <br /><br />
                <Link to="/"><button> Home </button></Link>
            </div>
        );
    }

}

export default Cadastro;