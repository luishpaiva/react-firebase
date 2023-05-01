import React, { Component } from 'react';
import firebase from "../../Firebase";

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            sobrenome: ""
        }
    }

    async componentDidMount() {
        firebase.auth().onAuthStateChanged(async (usuario) => {
            if (usuario) {
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                    .then((retorno) => {
                        this.setState({
                            nome: retorno.data().nome,
                            sobrenome: retorno.data().sobrenome,
                            dataNascimento: retorno.data().dataNascimento
                        });
                    });
            }
        });
    }

    async sair() {
        firebase.auth().signOut()
        .then(() => {
            window.location.href = "./";
        });
    }

    render() {
        return(
            <div>
                Seja bem-vindo, você logou com sucesso!!
                <br /><br />
                Seus dados são:<br />
                Nome: { this.state.nome }<br />
                Sobrenome: { this.state.sobrenome }<br />
                Data de Nascimento: { this.state.dataNascimento }
                <br /><br />
                <button onClick={ this.sair }> Sair </button>
            </div>
        )
    }
}

export default Principal;
