import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import defImage from "../../images/default_img.png";
import "./Movie.css";
import { useState } from "react";
import MovieModal from "../modal_movie/ModalMovie";
function Movie({ movie }) {
  const [showFlag, setShowFlag] = useState(false);

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
          <Button
            className="btn"
            variant="primary"
            onClick={() => handleShow()}
          >
            Add to Favorite
          </Button>
        </Card.Body>
      </Card>

      <MovieModal
        showFlag={showFlag}
        handleClose={handleClose}
        clickedMovie={movie}
      />
    </>
  );
}

export default Movie;
