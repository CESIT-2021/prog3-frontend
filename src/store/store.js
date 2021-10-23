import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import productoSlice from './slices/productoSlice';
import tareaSlice from './slices/tareaSlice';

export default configureStore({
  reducer: {
      counter: counterReducer,
      producto: productoSlice,
      tarea: tareaSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
