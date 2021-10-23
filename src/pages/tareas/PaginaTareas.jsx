import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GetTareas } from '../../actions/tareasActions';

const PaginaTareas = () => {

  const dispatch = useDispatch();
  const { cargando, listaTareas } = useSelector(
    (state) => state.tarea
  );

  useEffect(() => {
    dispatch(GetTareas());
  }, [dispatch]);

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
          {listaTareas.map(tarea => (
          <tr key={tarea._id}>
            <td>{tarea.nombre}</td>
            <td>{tarea.descripcion}</td>
            <td>{tarea.estaFinailzada ? 'si' : 'no'}</td>
            <td>ver - 
              <a href={`/tareas/${tarea._id}/editar`}>Editar</a>
               - eliminar</td>
          </tr>))}
          
        </tbody>
      </table>
    </div>
  );
};

export default PaginaTareas;
