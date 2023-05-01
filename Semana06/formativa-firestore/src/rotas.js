import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home     from './paginas/Home'    ;
import Contato  from './paginas/Contato' ;
import Sobre    from './paginas/Sobre'   ;
import NotFound from './paginas/NotFound';
import Cadastro from "./paginas/Cadastro";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/"         element={<Home     />} />
                <Route exact={true} path="/cadastro" element={<Cadastro />} />
                <Route exact={true} path="/contato"  element={<Contato  />} />
                <Route exact={true} path="/sobre"    element={<Sobre    />} />
                <Route exact={true} path="*"         element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
