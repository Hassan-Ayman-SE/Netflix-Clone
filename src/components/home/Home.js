import { useEffect, useState } from "react";
import MovieList from "../movie_list/MovieList";
import { Spinner } from "react-bootstrap";
import "./Home.css";

function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTrendingMovies = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
    //OR Use axios to get the data (Note: I use axios in FavList)
    fetch(serverURL).then((response) => {
      response
        .json()
        .then((data) => {
          console.log(data);
          setMoviesData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setMoviesData(error.toString());
          setIsLoading(false);
        });
    });
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="centered-container">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <MovieList moviesData={moviesData} />
      )}
    </>
  );
}

export default Home;
