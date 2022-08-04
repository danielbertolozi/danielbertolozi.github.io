import { useNavigate } from "react-router-dom";
import Constants from "../../../Constants";
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
          bg={Constants.PRO_BANNER_URL} />
        <Banner
          text="Carros"
          onClick={navigateToCars}
          bg={Constants.CARS_BANNER_URL} />
        <Banner
          text="Fotografia"
          onClick={navigateToPhotos}
          bg={Constants.PHOTOS_BANNER_URL} />
      </div>
    </div>
  );
}
