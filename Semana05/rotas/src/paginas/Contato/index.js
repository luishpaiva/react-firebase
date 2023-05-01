import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import App from '../../App';

class Contato extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Contato</h1>
                <Link to="/"><button> Home </button></Link>
                <div className='contato'>
                    <nome>Nome: Luís Henrique Paiva</nome><br />
                    <email>E-Mail: paiva.l@pucpr.br</email>
                </div>
            </div>
        );
    }

}

export default Contato;