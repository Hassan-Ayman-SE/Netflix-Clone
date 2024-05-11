import Movie from "../movie/Movie";
import './MovieList.css';

function MovieList(props) {
  return (
    <>
      <div className="parent">
        {props.moviesData.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default MovieList;
