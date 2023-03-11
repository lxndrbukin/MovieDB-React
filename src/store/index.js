import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer, setTerm } from './slices/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export * from './thunks/fetchMovies';
export { store, setTerm };
