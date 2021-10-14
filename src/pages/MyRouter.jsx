import React from 'react';
import { Switch, Route} from 'react-router-dom';

import PaginaSumador from './PaginaSumador';
import PaginaProductos from './PaginaProductos';
import PaginaInicio from './PaginaInicio';
import PaginaDetalleProducto from './PaginaDetalleProducto';
import PaginaSumadorRedux from './PaginaSumadorRedux';
import PaginaProductosRedux from './PaginaProductosRedux';

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
