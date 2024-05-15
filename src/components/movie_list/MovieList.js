import { ToastContainer } from "react-toastify";
import Movie from "../movie/Movie";
import "./MovieList.css";

function MovieList(props) {
  return (
    <>
      <ToastContainer />
      <div className="parent">
        {props.moviesData.map((movie) => (
          <Movie movie={movie} key={movie.id} isFavPage={false} />
        ))}
      </div>
    </>
  );
}

export default MovieList;
