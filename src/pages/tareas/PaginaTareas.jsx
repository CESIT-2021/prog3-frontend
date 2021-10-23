import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiLink from '@mui/material/Link';
import { CambiarEstadoTarea, EliminarTarea, GetTareas } from '../../actions/tareasActions';

const PaginaTareas = () => {
  const dispatch = useDispatch();
  const { cargando, listaTareas } = useSelector((state) => state.tarea);

  useEffect(() => {
    dispatch(GetTareas());
  }, [dispatch]);

  const eliminarTarea = (id) => {
    if(window.confirm("Desea eliminar la tarea?")) {
      dispatch(EliminarTarea(id));
    }
  };

  return (
    <div>
      <h2>Tareas</h2>

      <a href='/tareas/nueva'>Nueva Tarea</a>

      {cargando && <div>Cargando....</div>}

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Finalizada?</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaTareas.map((tarea) => (
            <tr key={tarea._id}>
              <td>{tarea.nombre}</td>
              <td>{tarea.descripcion}</td>
              <td>
                <MuiLink onClick={() => dispatch(CambiarEstadoTarea(tarea._id))}>
                  {tarea.estaFinalizada ? 'si' : 'no'}
                </MuiLink>
              </td>
              <td>
                <Link to={`/tareas/${tarea._id}/ver`}>Ver</Link>-
                <Link to={`/tareas/${tarea._id}/editar`}>Editar</Link>-
                <MuiLink onClick={() => eliminarTarea(tarea._id)}>
                  Eliminar
                </MuiLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaginaTareas;
