import Movie from "../movie/Movie";

import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

function FavList(props) {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/getMovies`;

    axios
      .get(serverURL)
      .then((response) => {
        setMoviesData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setMoviesData(error.toString());
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="parent">
        {isLoading ? (
          <div className="centered-container">
            <Spinner animation="border" variant="light" />
          </div>
        ) : moviesData.length === 0 ? (
          <h1 style={{ color: "white" }}>"There is no Favorite Movies"</h1>
        ) : (
          moviesData.map((movie) => (
            <Movie movie={movie} key={movie.id} isFavPage={true} />
          ))
        )}
      </div>
    </>
  );
}

export default FavList;
