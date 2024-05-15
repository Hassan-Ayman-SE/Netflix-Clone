import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import defImage from "../../images/default_img.png";
import "./Movie.css";
import { useState } from "react";
import MovieModal from "../modal_movie/ModalMovie";
import axios from "axios";
function Movie({ movie, isFavPage }) {
  const [showFlag, setShowFlag] = useState(false);
  //const [isDeleted, setIsDeleted] = useState(false);

  const deleteMovie = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/DELETE/${movie.id}`;
    axios
      .delete(serverURL)
      .then((response) => {
        // setIsDeleted(true);
        window.location.reload();
      })
      .catch((error) => console.log(error));

    // window.location.reload();
  };

  const handleShow = () => {
    setShowFlag(true);
  };

  const handleClose = () => {
    setShowFlag(false);
  };
  return (
    <>
      <Card className="card" style={{ width: "18rem" }} key={movie.id}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Card.Title>{movie.title || "No Title"}</Card.Title>
          {/* <Card.Text>
          <p>{movie.overview || "No overview"}</p>
        </Card.Text> */}
          {!isFavPage && (
            <Button
              className="btn"
              variant="primary"
              onClick={() => handleShow()}
            >
              Add to Favorite
            </Button>
          )}

          {isFavPage && (
            <div className="upd-del-buttons">
              <Button onClick={() => handleShow()} variant="primary">
                Update
              </Button>
              <Button onClick={deleteMovie} variant="danger">
                Delete
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>

      <MovieModal
        showFlag={showFlag}
        handleClose={handleClose}
        clickedMovie={movie}
        isFavPage={isFavPage}
      />
    </>
  );
}

export default Movie;
