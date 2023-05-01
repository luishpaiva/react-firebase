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
        await firebase.auth().onAuthStateChanged(async (usuario) => {
            if (usuario) {
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno) => {
                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome,
                    });
                });
            }
        });
    }

    render() {
        return(
            <div>
                Seja bem-vindo, { this.state.nome } { this.state.sobrenome + "."} <br />
                Você logou com sucesso!
            </div>
        )
    }
}

export default Principal;
