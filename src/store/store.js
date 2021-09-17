import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import productoSlice from './slices/productoSlice';

export default configureStore({
  reducer: {
      counter: counterReducer,
      producto: productoSlice
  },
});
