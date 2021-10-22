import { createSlice } from '@reduxjs/toolkit';
import { GetTareas, GetTareaById, CrearTarea, ActualizarTarea } from '../../actions/tareasActions';

export const initialState = {
  cargando: false,
  listaTareas: [],
  error: null,
  tareaSeleccionada: {
    nombre: '',
    descripcion: '',
    estaFinalizada: false
  }
};

export const tareaSlice = createSlice({
  name: 'tarea',
  initialState: initialState,
  extraReducers: {
    [CrearTarea.pending]: (state, action) => {
      state.cargando = true;
    },
    [CrearTarea.fulfilled]: (state, action) => {
      console.info(action);
      state.cargando = false;
      state.error = null;
    },
    [CrearTarea.rejected]: (state, action) => {
      state.cargando = false;
      state.error = 'Error al guardar la tarea';
    },
    [GetTareas.pending]: (state, action) => {
      state.cargando = true;
    },
    [GetTareas.fulfilled]: (state, action) => {
      state.cargando = false;
      state.listaTareas = action.payload.data
      state.error = null;
    },
    [GetTareas.rejected]: (state, action) => {
      state.cargando = false;
      state.error = 'Error al obtener tareas';
    },
    [GetTareaById.pending]: (state, action) => {
      state.cargando = true;
    },
    [GetTareaById.fulfilled]: (state, action) => {
      state.cargando = false;
      state.tareaSeleccionada = action.payload.data
      state.error = null;
    },
    [GetTareaById.rejected]: (state, action) => {
      state.cargando = false;
      state.error = 'Error al obtener la tarea';
    },
    [ActualizarTarea.pending]: (state, action) => {
      state.cargando = true;
    },
    [ActualizarTarea.fulfilled]: (state, action) => {
      state.cargando = false;
      state.tareaSeleccionada = action.payload.data
      state.error = null;
    },
    [ActualizarTarea.rejected]: (state, action) => {
      state.cargando = false;
      state.error = 'Error al actualizar la tarea';
    },
  },
});

export default tareaSlice.reducer;
