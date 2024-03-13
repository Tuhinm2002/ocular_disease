import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function ImageUpload(){
    return(
        <>
    <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
        </>
    );
}

export default ImageUpload;
