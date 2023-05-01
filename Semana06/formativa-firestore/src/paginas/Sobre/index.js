import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import App from '../../App';

class Sobre extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Sobre</h1>
                <Link to="/"><button> Página Inicial </button></Link>
                <div className='aplicacao'>
                    <linguagem>Linguagem: JavaScript</linguagem><br />
                    <bibliotecas>Bibliotecas: -</bibliotecas><br />
                    <frameworks>Frameworks: React</frameworks><br />
                    <versao>Versão: 1.0</versao>
                </div>
            </div>
        );
    }

}

export default Sobre;