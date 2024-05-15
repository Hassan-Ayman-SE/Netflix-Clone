import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import defImage from "../../images/default_img.png";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./ModalMovie.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MovieModal(props) {
  const [comment, setComment] = useState("");
  const [commentFav, setCommentFav] = useState(props.clickedMovie.comment);

  const saveComment = (e) => {
    setComment(e.target.value);
  };

  const saveCommentFav = (e) => {
    setCommentFav(e.target.value);
  };
  const addMovieToFavorite = (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_serverURL}/addMovie`;
    const data = {
      id: props.clickedMovie.id,
      title: props.clickedMovie.title || "No Title",
      overview: props.clickedMovie.overview || "No Overview",
      poster_path: props.clickedMovie.poster_path || "No Poster Path",
      release_date: props.clickedMovie.release_date || "No Release_Date",
      comment: comment || "No Comment",
    };
    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        toast.success("Movie added to favorites successfully! ", {
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("This Movie is already added", {
          autoClose: 2000,
        });
      });

    props.handleClose();
  };

  const updateMovie = (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_serverURL}/UPDATE/${props.clickedMovie.id}`;
    const data = {
      // title: props.clickedMovie.title || "No Title",
      // overview: props.clickedMovie.overview || "No Overview",
      // poster_path: props.clickedMovie.poster_path || "No Poster Path",
      // release_date: props.clickedMovie.release_date || "No Release_Date",
      comment: commentFav || "No Comment",
    };
    axios
      .put(url, data)
      .then((response) => {
        console.log(response);
        toast.success("Comment updated successfully! ", {
          autoClose: 1000,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    props.handleClose();
  };

  //TODO: use props.isFavPage in Modal and add onSubmit to Form fix buttons (type "submit")
  return (
    <>
      <Modal show={props.showFlag} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.clickedMovie.title || "No Title"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            //className=""
            src={
              `https://image.tmdb.org/t/p/w185${props.clickedMovie.poster_path}` ||
              defImage
            }
            width="100%"
            height="350px"
          ></Image>
          <b>{props.clickedMovie.title || "No Title"}</b>

          {props.isFavPage ? (
            <Form onSubmit={updateMovie}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Edit your Comment</Form.Label>
                <Form.Control
                  name="comment"
                  type="text"
                  rows={2}
                  value={commentFav}
                  placeholder="Edit your comment..."
                  onChange={saveCommentFav}
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Modal.Footer>
            </Form>
          ) : (
            <Form onSubmit={addMovieToFavorite}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Write a Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  name="comment"
                  type="text"
                  rows={2}
                  placeholder="Write your comment here..."
                  onChange={saveComment}
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Add to Favorite
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieModal;
