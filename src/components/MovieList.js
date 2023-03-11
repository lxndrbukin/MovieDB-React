import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import Box from './Box';
import Movie from './Movie';

export default function MovieList() {
  const { data, isLoading } = useSelector((state) => {
    return state.movies;
  });

  const renderedMovies = () => {
    return data.map((movieData) => {
      return <Movie key={movieData.imdbID} movieData={movieData} />;
    });
  };

  let content;
  if (!isLoading && data.length === 0) {
    content = (
      <Box>
        <i className='fas fa-film'></i>
        <span>Welcome to MovieDB</span>
      </Box>
    );
  } else if (isLoading) {
    content = <Spinner />;
  } else if (typeof data === 'string') {
    content = <Box>{data}</Box>;
  } else {
    content = renderedMovies();
  }

  return <div className='movies'>{content}</div>;
}
