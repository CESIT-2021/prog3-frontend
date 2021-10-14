import React from 'react';
import { Switch, Route} from 'react-router-dom';

import PaginaSumador from './pages/PaginaSumador';
import PaginaProductos from './pages/PaginaProductos';
import PaginaInicio from './pages/PaginaInicio';
import PaginaDetalleProducto from './pages/PaginaDetalleProducto';
import PaginaSumadorRedux from './pages/PaginaSumadorRedux';
import PaginaProductosRedux from './pages/PaginaProductosRedux';

const MyRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={PaginaInicio} />
      <Route path='/sumador' component={PaginaSumador} />
      <Route path='/sumador-redux' component={PaginaSumadorRedux} />
      <Route exact path='/productos' component={PaginaProductos} />
      <Route exact path='/productos-redux' component={PaginaProductosRedux} />
      <Route path='/productos/:idProducto' component={PaginaDetalleProducto} />
    </Switch>
  );
};

export default MyRouter;
