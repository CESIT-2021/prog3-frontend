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
