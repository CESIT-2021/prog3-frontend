import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:4000';

export const CrearTarea = createAsyncThunk(
  'tarea/postTarea',
  async (tarea) => await axios.post(`${BASE_URL}/api/tareas`, tarea)
);

export const GetTareas = createAsyncThunk(
  'tarea/getTareas',
  async () => await axios.get(`${BASE_URL}/api/tareas`)
);

export const GetTareaById = createAsyncThunk(
  'tarea/getTareaById',
  async (id) => await axios.get(`${BASE_URL}/api/tareas/${id}`)
);

export const ActualizarTarea = createAsyncThunk(
  'tarea/putTareaById',
  async ({id, datos}) => await axios.put(`${BASE_URL}/api/tareas/${id}`, datos)
);