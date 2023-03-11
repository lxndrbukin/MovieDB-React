import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from '../thunks/fetchMovies';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: {
    searchTerm: '',
    isLoading: false,
    data: [],
  },
  reducers: {
    setTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});

export const moviesReducer = moviesSlice.reducer;
export const { setTerm } = moviesSlice.actions;
