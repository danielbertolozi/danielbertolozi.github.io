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

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>danielbertolozi.github.io</h1>
        <span>Lorem Y e etc</span>
      </header>
      <div className="home-tiles-container">
        <div>
          <span>Profissional</span>
        </div>
        <div>
          <span onClick={navigateToCars}>Carros</span>
        </div>
        <div>
          <span onClick={navigateToPhotos}>Fotografia</span>
        </div>
      </div>
    </div>
  );
}
