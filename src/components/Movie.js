export default function Movie({
  movieData: { Title, Year, Poster, imdbRating, Runtime, Genre, Plot },
}) {
  return (
    <div className='movie'>
      <img className='movie-poster' src={Poster} />
      <div className='movie-info'>
        <h3>
          {Title} ({Year})
        </h3>
        <div className='about'>
          <div className='about_rating'>
            <i className='fas fa-star'></i> {imdbRating}
          </div>
          <div className='about_runtime'>{Runtime}</div>
          <div className='about_genre'>{Genre}</div>
        </div>
        <p className='plot'>{Plot}</p>
      </div>
    </div>
  );
}
