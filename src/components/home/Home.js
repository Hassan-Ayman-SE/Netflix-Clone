import { useEffect, useState } from "react";
import MovieList from "../movie_list/MovieList";

function Home() {
  const [moviesData, setMoviesData] = useState([]);

  const getTrendingMovies = () => {
    const serverURL = "https://movies-library-1.onrender.com/trending";

    fetch(serverURL).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setMoviesData(data);
      });
    });
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

    return <MovieList moviesData={moviesData} />;
}

export default Home;
