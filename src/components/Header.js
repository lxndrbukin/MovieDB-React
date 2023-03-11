import { useDispatch, useSelector } from 'react-redux';
import { setTerm, fetchMovies } from '../store';

export default function Header() {
  const { searchTerm } = useSelector((state) => {
    return state.movies;
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setTerm(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(searchTerm));
  };

  return (
    <header className='header'>
      <div className='header-nav'>
        <div className='header-logo'>
          <i className='fas fa-film'></i>
          <span>MovieDB</span>
        </div>
        <form onSubmit={handleSubmit} className='header-search'>
          <input
            onChange={handleChange}
            className='header-search-input'
            name='search'
            type='text'
            placeholder='Search for movies'
          />
          <button className='header-search-button' type='submit' value='Search'>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
    </header>
  );
}
