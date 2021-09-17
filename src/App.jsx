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
import PaginaSumadorRedux from './pages/PaginaSumadorRedux';
import PaginaProductosRedux from './pages/PaginaProductosRedux';

const App = () => {

    return (
    <>
        <Titulo nombre="Programación 3" />
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/sumador">Sumador</Link>
            </li>
            <li>
                <Link to="/sumador-redux">Sumador Redux</Link>
            </li>
            <li>
                <Link to="/productos">Productos</Link>
            </li>
            <li>
                <Link to="/productos-redux">Productos Redux</Link>
            </li>
        </ul>

        <div className="container">
            <Switch>
                <Route exact path="/" component={PaginaInicio} />
                <Route path="/sumador" component={PaginaSumador} />
                <Route path="/sumador-redux" component={PaginaSumadorRedux} />
                <Route exact path="/productos" component={PaginaProductos} />
                <Route exact path="/productos-redux" component={PaginaProductosRedux} />
                <Route path="/productos/:idProducto" component={PaginaDetalleProducto} />
            </Switch>
        </div>
    </>
    )
};

export default App;