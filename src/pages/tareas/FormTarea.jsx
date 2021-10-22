import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  CrearTarea,
  GetTareaById,
  ActualizarTarea,
} from '../../actions/tareasActions';
import { useHistory, useParams } from 'react-router';

const FormTarea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { nombre, descripcion, estaFinalizada } = useSelector(
    (state) => state.tarea.tareaSeleccionada
  );
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    if (id) {
      dispatch(GetTareaById(id));
    }
  }, []);

  const onSubmit = (datos) => {
    try {
      if (id) {
        dispatch(ActualizarTarea({ id, datos }));
      } else {
        dispatch(CrearTarea(datos));
      }

      history.push('/tareas');
    } catch (error) {
      // manejo de error
    }
  };

  return (
    <div>
      <h2>{id ? 'Editando' : 'Nueva'} Tareas</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='nombre'>Nombre: </label>
        <br />
        <input
          type='text'
          defaultValue={nombre}
          {...register('nombre', { required: true })}
        />
        {errors.nombre && <span>Este campo es requerido</span>}
        <br />

        <label htmlFor='descripcion'>Descripcion: </label>
        <br />
        <input
          type='text'
          defaultValue={descripcion}
          {...register('descripcion')}
        />
        <br />

        <label htmlFor='estaFinalizada'>Finalizada?: </label>
        <br />
        <input
          type='checkbox'
          defaultChecked={estaFinalizada}
          {...register('estaFinalizada')}
        />
        <br />

        <button type='submit'>Guardar</button>
        <a href='/tareas'>Cancelar</a>
      </form>
    </div>
  );
};

export default FormTarea;
