import React from 'react';
import Titulo from './components/Titulo'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PaginaSumador from './pages/PaginaSumador';
import PaginaProductos from './pages/PaginaProductos';
import PaginaInicio from './pages/PaginaInicio';
import PaginaDetalleProducto from './pages/PaginaDetalleProducto';


const App = () => {

    return (
    <>
        <Titulo nombre="Clase de repaso" />
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/sumador">Sumador</Link>
            </li>
            <li>
                <Link to="/productos">Productos</Link>
            </li>
        </ul>

        <div className="container">
            <Switch>
                <Route exact path="/" component={PaginaInicio} />
                <Route path="/sumador" component={PaginaSumador} />
                <Route exact path="/productos" component={PaginaProductos} />
                <Route path="/productos/:idProducto" component={PaginaDetalleProducto} />
            </Switch>
        </div>

    </>
    )
};

export default App;