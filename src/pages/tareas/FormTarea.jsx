import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { CrearTarea } from '../../actions/tareasActions';

const FormTarea = () => {
    const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { nombre, descripcion, estaFinalizada } = useSelector(
    (state) => state.tarea.tareaSeleccionada
  );

  const onSubmit = (datos) => {
    console.info('---> ', datos);
    dispatch(CrearTarea(datos))
  };

  return (
    <div>
      <h2>Nueva Tareas</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='nombre'>Nombre: </label>
        <br />
        <input type='text' defaultValue={nombre} {...register('nombre')} />
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
        <a href="/tareas">Cancelar</a>
      </form>
    </div>);
}

export default FormTarea