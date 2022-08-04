import { useNavigate } from "react-router-dom";
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
        <span>Lorem Y e etc</span>
      </header>
      <div className="home-tiles-container">
        <div className="clickable">
          <span onClick={navigateToProfessional}>Profissional</span>
        </div>
        <div className="clickable">
          <span onClick={navigateToCars}>Carros</span>
        </div>
        <div className="clickable">
          <span onClick={navigateToPhotos}>Fotografia</span>
        </div>
      </div>
    </div>
  );
}
