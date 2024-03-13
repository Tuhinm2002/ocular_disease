import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/1005_right.jpg";
import img2 from "../assets/1016_right.jpg";
import img3 from "../assets/1020_left.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function ImgCarousel(){
    return (
    <Carousel>
      <Carousel.Item>
        <img src={img1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>macular hole and normal fundus</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>normal fundus and epiretinal membrane</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          hypertensive retinopathy and hypertensive retinopathy, mild nonproliferative retinopathy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default ImgCarousel;