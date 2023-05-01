import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./paginas/Cadastro";
import Login from "./paginas/Login";
import Principal from "./paginas/Principal"
import NotFound from './paginas/NotFound';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/"            element={<Login     />} />
                <Route exact={true} path="/cadastro"    element={<Cadastro  />} />
                <Route exact={true} path="/principal"   element={<Principal />} />
                <Route exact={true} path="*"            element={<NotFound  />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
