import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/Img1.png";
import img2 from "../assets/Img2.png";
import img3 from "../assets/Img3.png";
import "bootstrap/dist/css/bootstrap.min.css";

const ImgCarousel = () => {
  
  return (
    <Carousel style={{ paddingTop: "30px" , width: "150vh", marginLeft: "30vh", paddingBottom: "20px"}}>
      <Carousel.Item style={{backgroundColor:"#979b3c"}}>
        <img src={img1} alt="" width={400} style={{ marginLeft: "470px"}} />
        <Carousel.Caption style={{paddingBottom: "150px", paddingRight: "60vh"}}>
          <h3 style={{ color: "#fff", border: "2px solid #000", borderRadius: "5px", padding: "5px", backgroundColor: "#71811c"}}>First slide label</h3>
          <p style={{ color: "#fff", border: "2px solid #000", borderRadius: "5px", padding: "5px", backgroundColor: "#71811c" }}>macular hole and normal fundus</p>     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"#1b3f66"}}>
        <img src={img2} alt="" width={400} style={{ marginLeft: "470px" }} />
        <Carousel.Caption style={{paddingBottom: "150px", paddingRight: "60vh"}}>
          <h3 style={{ color: "#fff", border: "2px solid #000", borderRadius: "5px", padding: "5px", backgroundColor: "#223254"}}>Second slide label</h3>
          <p style={{ color: "#fff", border: "2px solid #000", borderRadius: "5px", padding: "5px", backgroundColor: "#223254" }}>normal fundus and epiretinal membrane</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"#9c321c"}}>
        <img src={img3} alt="" width={400} style={{ marginLeft: "470px"}} />
        <Carousel.Caption style={{paddingBottom: "150px", paddingRight: "70vh"}}>
          <h3 style={{ color: "#fff", border: "2px solid #000", borderRadius: "5px", padding: "5px", backgroundColor: "#913522"}}>Third slide label</h3>
          <p style={{ color: "#fff", border: "2px solid #000", borderRadius: "5px", padding: "5px", backgroundColor: "#913522" }}>
            hypertensive retinopathy and hypertensive retinopathy, mild nonproliferative retinopathy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousel;