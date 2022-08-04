import { useNavigate } from "react-router-dom";
import { Banner } from "../../elements/Banner/Banner";
import "./Home.css";


export default function Home() {
  const nav = useNavigate();

  function navigateToCars() {
    nav("/cars");
  }

  function navigateToPhotos() {
    nav("/photos");
  }

  function navigateToProfessional() {
    nav("/pro");
  }

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>danielbertolozi.github.io</h1>
      </header>
      <div className="home-tiles-container">
        <Banner
          text="Profissional"
          onClick={navigateToProfessional}
          bg="/assets/pro_banner.jpg" />
        <Banner
          text="Carros"
          onClick={navigateToCars}
          bg="/assets/cars_banner.jpg" />
        <Banner
          text="Fotografia"
          onClick={navigateToPhotos}
          bg="/assets/photo_banner.jpg" />
      </div>
    </div>
  );
}
