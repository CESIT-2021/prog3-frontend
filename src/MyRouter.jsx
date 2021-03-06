import React from 'react';
import { Switch, Route} from 'react-router-dom';

import PaginaSumador from './pages/PaginaSumador';
import PaginaProductos from './pages/PaginaProductos';
import PaginaInicio from './pages/PaginaInicio';
import PaginaDetalleProducto from './pages/PaginaDetalleProducto';
import PaginaSumadorRedux from './pages/PaginaSumadorRedux';
import PaginaProductosRedux from './pages/PaginaProductosRedux';
import PaginaTareas from './pages/tareas/PaginaTareas';
import FormTarea from './pages/tareas/FormTarea';
import VerTarea from './pages/tareas/VerTarea';

const MyRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={PaginaInicio} />
      <Route path='/sumador' component={PaginaSumador} />
      <Route path='/sumador-redux' component={PaginaSumadorRedux} />
      <Route exact path='/productos' component={PaginaProductos} />
      <Route exact path='/productos-redux' component={PaginaProductosRedux} />
      <Route path='/productos/:idProducto' component={PaginaDetalleProducto} />
      <Route exact path='/tareas' component={PaginaTareas} />
      <Route exact path='/tareas/nueva' component={FormTarea} />
      <Route exact path='/tareas/:id/editar' component={FormTarea} />
      <Route exact path='/tareas/:id/ver' component={VerTarea} />
    </Switch>
  );
};

export default MyRouter;
