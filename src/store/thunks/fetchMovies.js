import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://www.omdbapi.com';
const apikey = 'a4daa08f';

export const fetchMovies = createAsyncThunk(
  'movies/fetch',
  async (searchTerm) => {
    if (searchTerm) {
      const movieList = [];
      const res = await axios.get(`${api}/?apikey=${apikey}&s=${searchTerm}`);
      if (res.data.Error) {
        return res.data.Error;
      }
      const movieIDs = res.data.Search.map((movie) => movie.imdbID);
      for (let movieID of movieIDs) {
        const res = await axios.get(`${api}/?apikey=${apikey}&i=${movieID}`);
        try {
          movieList.push(res.data);
        } catch (err) {
          console.error(err);
        }
      }
      return movieList;
    }
    return 'Please provide an input for your search';
  }
);
