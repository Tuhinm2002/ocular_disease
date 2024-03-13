// import logo from './logo.svg';
// import './App.css';
// import NavBar from "react-bootstrap/Navbar";
import Newnav from './components/NavBar';
import ImgCarousel from './components/ImageCarousel';
import ImageUpload from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <Newnav></Newnav>
      <ImgCarousel></ImgCarousel>
      <ImageUpload></ImageUpload>

    </div>
  );
}

export default App;
