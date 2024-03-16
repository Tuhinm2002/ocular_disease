import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function ImageUpload() {
  return (
    <>
      <Form.Group controlId="formFileLg" className="mb-3" style={{ backgroundColor: "#7a9699", padding: "10px", borderRadius: "10px" , height: "120px", width: "180vh", marginLeft: "18vh"}}>
        <Form.Label style={{ color: "#fff", fontSize: "1.3rem" }}>Upload Your Image</Form.Label>
        <Form.Control type="file" size="lg" style={{ backgroundColor: "#e0e0e0", color: "#000", borderRadius: "5px", border: "none" }} />
        <Form.Text className="text-muted">
          Choose a large file for upload.
        </Form.Text>
      </Form.Group>
    </>
  );
}

export default ImageUpload;
