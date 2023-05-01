import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            email: "",
            senha: ""
        }

        this.acessar = this.acessar.bind(this);
    }

    async acessar() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
            window.location.href = "./principal";
        })
        .catch((erro) => {
            alert("Usuário não cadastrado ou e-mail/senha incorretos! Por gentileza, verifique e tente novamente.");
        });
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <label>E-mail</label><br />
                <input type="text" placeholder='nome@email.com' onChange={ (e) => this.setState( {email:e.target.value} )} />
                <br />
                <label>Senha</label><br />
                <input type="password" placeholder='********' onChange={ (e) => this.setState( {senha:e.target.value} )} />
                <br /><br />
                <button onClick={this.acessar}> Acessar </button> <Link to="/cadastro"><button> Cadastrar usuário </button></Link>
            </div>
        )
    }

}

export default Login;