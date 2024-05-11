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

  const saveComment = (e) => {
    setComment(e.target.value);
  };

  const addMovieToFavorite = () => {
    const url = "https://movies-library-1.onrender.com/addMovie";
    const data = {
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
      })
      .catch((err) => {
        console.log(err);
      });
    toast.success("Movie added to favorites successfully! ", {
      autoClose: 2000,
    });
  };
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
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                name="comment"
                type="text"
                rows={2}
                placeholder="Write your comment here..."
                onChange={saveComment}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovieToFavorite}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default MovieModal;
