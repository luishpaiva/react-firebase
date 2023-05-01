import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import 'firebase/auth';


class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            dataNascimento: new Date(0)
        }
        this.cadastrar = this.cadastrar.bind(this);
    }

    async cadastrar() {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(async (retorno) => {
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                dataNascimento: this.state.dataNascimento
            });
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "./";
        });
    }

    render() {
        return (
            <div styl>
                <h1>Página de Cadastro</h1>
                <label>E-mail</label><br />
                <input type='text' placeholder='nome@email.com' onChange={ (e) => this.setState({email: e.target.value}) } />
                <br />
                <label>Senha</label><br />
                <input type='password' placeholder='********' onChange={ (e) => this.setState({senha: e.target.value}) } />
                <br />
                <label>Nome</label><br />
                <input type='text' placeholder='João' onChange={ (e) => this.setState({nome: e.target.value}) } />
                <br />
                <label>Sobrenome</label><br />
                <input type='text' placeholder='Silva' onChange={ (e) => this.setState({sobrenome: e.target.value}) } />
                <br />
                <label>Data de nascimento</label><br />
                <input type='date' onChange={ (e) => this.setState({dataNascimento: e.target.value}) } />
                <br /><br />
                <button onClick={this.cadastrar}> Cadastrar </button> <Link to="/"><button> Login </button></Link>
            </div>
        );
    }
}

export default Cadastro;
